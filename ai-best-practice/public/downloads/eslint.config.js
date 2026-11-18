// ESLint config that enforces the markup and component rules from
// component-design.instructions.md.
// Requires: npm i -D eslint typescript-eslint
// Run: npx eslint "src/**/*.tsx"
import tseslint from 'typescript-eslint';

// ─── local/no-same-element-nesting ──────────────────────────────────
// No <div> inside <div>, <span> inside <span>, <p> inside <p>, etc.
const noSameElementNesting = {
  meta: {
    type: 'problem',
    docs: { description: 'Disallow nesting an element inside the same element type' },
    messages: {
      nested: '<{{tag}}> inside <{{tag}}>. Use section → article → div, or a pseudo-element.',
    },
    schema: [],
  },
  create: (context) => ({
    JSXElement: (node) => {
      const tag = node.openingElement.name.name;
      if (!tag) return;

      const isNested = context.sourceCode
        .getAncestors(node)
        .some((a) => a.type === 'JSXElement' && a.openingElement.name.name === tag);

      if (isNested) context.report({ node, messageId: 'nested', data: { tag } });
    },
  }),
};

// ─── local/require-companion-imports ────────────────────────────────
// Some components only make sense next to others. For example, a grid's
// filter and pager components need the grid component and its hook.
// Options: [{ components: string[], requires: string[] }]
const requireCompanionImports = {
  meta: {
    type: 'problem',
    docs: { description: 'Require companion imports when using certain components' },
    messages: {
      missing: "'{{name}}' requires {{missing}} in the same file.",
    },
    schema: [
      {
        type: 'object',
        properties: {
          components: { type: 'array', items: { type: 'string' } },
          requires: { type: 'array', items: { type: 'string' } },
        },
        required: ['components', 'requires'],
        additionalProperties: false,
      },
    ],
  },
  create: (context) => {
    const { components, requires } = context.options[0];
    const companionImports = [];
    const imported = new Set();

    return {
      ImportDeclaration: (node) => {
        for (const specifier of node.specifiers) {
          const name = specifier.local.name;
          imported.add(name);
          if (components.includes(name)) companionImports.push(specifier);
        }
      },
      'Program:exit': () => {
        const missing = requires.filter((name) => !imported.has(name));
        if (missing.length === 0) return;

        for (const specifier of companionImports) {
          context.report({
            node: specifier,
            messageId: 'missing',
            data: {
              name: specifier.local.name,
              missing: missing.map((name) => `'${name}'`).join(' and '),
            },
          });
        }
      },
    };
  },
};

// ─── Config ─────────────────────────────────────────────────────────
export default tseslint.config(
  { ignores: ['dist/**', 'coverage/**'] },
  {
    files: ['**/*.{ts,tsx}'],
    extends: [tseslint.configs.recommended],
    plugins: {
      local: {
        rules: {
          'no-same-element-nesting': noSameElementNesting,
          'require-companion-imports': requireCompanionImports,
        },
      },
    },
    rules: {
      'local/no-same-element-nesting': 'error',

      // Example: a data grid's filter and pager need the grid and its hook
      'local/require-companion-imports': [
        'error',
        { components: ['GridFilter', 'GridPager'], requires: ['DataGrid', 'useDataGrid'] },
      ],

      // Components are arrow functions whose root element is <section> (or <dialog>)
      'func-style': ['error', 'expression'],
      'no-restricted-syntax': [
        'error',
        {
          selector:
            'Program > ExportDefaultDeclaration > FunctionDeclaration, ' +
            'VariableDeclarator > ArrowFunctionExpression > BlockStatement > ReturnStatement ' +
            '> JSXElement > JSXOpeningElement > JSXIdentifier[name!=/^(section|dialog)$/]',
          message: 'Components are arrow functions whose root element is <section>.',
        },
      ],

      // Steer the AI away from outdated packages it learned from the web.
      // Example: Sitecore JSS was replaced by the Sitecore Content SDK.
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@sitecore-jss/*', '@sitecore-jss/*/**'],
              message: 'Sitecore JSS is replaced by the Content SDK; import from @sitecore-content-sdk/* instead.',
            },
          ],
        },
      ],
    },
  },
  {
    // Tests can render companion components in isolation
    files: ['**/*.spec.{ts,tsx}', '**/*.test.{ts,tsx}'],
    rules: {
      'local/require-companion-imports': 'off',
    },
  },
);
