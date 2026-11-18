// Stylelint config that enforces the CSS rules from component-design.instructions.md.
// Requires: npm i -D stylelint stylelint-config-standard
// Run: npx stylelint "src/**/*.module.css"
import stylelint from 'stylelint';

const { createPlugin, utils } = stylelint;

// ─── local/no-shorthand-margin-padding ─────────────────────────────
// Triad values (margin: 1rem 2rem 1rem) are an error.
// Any other multi-value shorthand (margin: 0 auto) is a warning.
const ruleName = 'local/no-shorthand-margin-padding';
const messages = utils.ruleMessages(ruleName, {
  triad: (prop) => `Unexpected triad value for "${prop}". Use ${prop}-block and ${prop}-inline instead.`,
  shorthand: (prop) => `Unexpected shorthand multi-value for "${prop}". Use ${prop}-block and ${prop}-inline instead.`,
});

const noShorthandMarginPadding = (primary) => (root, result) => {
  const validOptions = utils.validateOptions(result, ruleName, {
    actual: primary,
    possible: [true],
  });

  if (!validOptions) return;

  root.walkDecls(/^(margin|padding)$/, (decl) => {
    const values = decl.value.trim().split(/\s+/);

    if (values.length === 1) return;

    const isTriad = values.length === 3;
    utils.report({
      message: isTriad ? messages.triad(decl.prop) : messages.shorthand(decl.prop),
      node: decl,
      result,
      ruleName,
      severity: isTriad ? 'error' : 'warning',
    });
  });
};

noShorthandMarginPadding.ruleName = ruleName;
noShorthandMarginPadding.messages = messages;
noShorthandMarginPadding.meta = { fixable: false };

// ─── Config ─────────────────────────────────────────────────────────
export default {
  extends: 'stylelint-config-standard',
  plugins: [createPlugin(ruleName, noShorthandMarginPadding)],
  rules: {
    [ruleName]: true,
    'selector-class-pattern': null,
    'custom-property-pattern': null,
    'no-descending-specificity': null,
  },
  overrides: [
    {
      // Colors live in custom properties in the global stylesheet, never in modules
      files: ['**/*.module.css'],
      rules: {
        'color-no-hex': true,
        'function-disallowed-list': ['rgb', 'rgba', 'hsl', 'hsla'],
      },
    },
  ],
};
