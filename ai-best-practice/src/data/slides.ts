import { SlideData } from '../components/slide-deck/slide-deck.types';

// Tag for code snippets: keeps backslashes and strips the shared indentation
const code = (strings: TemplateStringsArray, ...values: string[]) => {
  const lines = String.raw({ raw: strings.raw }, ...values).replace(/^\n/, '').replace(/\n\s*$/, '').split('\n');
  const indent = Math.min(...lines.filter((line) => line.trim()).map((line) => line.search(/\S/)));
  return lines.map((line) => line.slice(indent)).join('\n');
};

export const slides: SlideData[] = [
  // ─── INTRO ───────────────────────────────────────────
  {
    id: 1,
    layout: 'title',
    title: 'How to Make AI Follow Best Practices',
    subtitle: '…and Not Just See Them as Suggestions',
    presenter: 'Caleb Haldane',
    presenterTitle: 'Senior Developer · Professional Opinion Haver',
  },
  {
    id: 2,
    layout: 'quote',
    title: 'The Problem in One Line',
    quote: 'The code is more what you’d call “guidelines” than actual rules.',
    quoteAuthor: 'Captain Barbossa, and also my AI assistant',
  },
  {
    id: 3,
    layout: 'content',
    title: 'The Journey',
    orderedCards: true,
    cards: [
      { icon: '📜', title: 'Writing the Rules', description: 'Turning my opinions into ui-design.instructions.md' },
      { icon: '💘', title: 'The Honeymoon', description: 'The AI read the rules and actually followed them' },
      { icon: '🌊', title: 'The Drift', description: 'Rules quietly turned into suggestions' },
      { icon: '🚨', title: 'Regaining Control', description: 'Stylelint and ESLint turned suggestions into errors' },
    ],
  },

  // ─── SECTION 1: WRITING THE RULES ────────────────────
  {
    id: 4,
    layout: 'section',
    title: 'Writing the Rules',
    subtitle: 'If it’s not written down, it’s just a vibe',
    sectionNumber: '01',
  },
  {
    id: 5,
    layout: 'content',
    title: 'Why an Instructions File?',
    emoji: '📜',
    bullets: [
      'AI wrote UI that worked, but every component looked like a different developer wrote it',
      'Div soup, utility classes, margin: 0 auto, all of it scraped straight off the internet',
      'I had strong opinions and no way to hand them to the AI',
      'Solution: ui-design.instructions.md, auto-loaded for every file under src/components',
    ],
  },
  {
    id: 6,
    layout: 'content',
    title: 'How It Gets Loaded',
    code: [
      {
        label: 'ui-design.instructions.md',
        content: code`
          ---
          applyTo: "app/src/components/**"
          ---

          # Component Design Rules

          These rules govern how all UI components are authored
          in this project. Follow every rule unless explicitly
          told otherwise.
        `,
      },
    ],
    takeaway: 'The applyTo glob means I never have to say “remember the rules.” They ride along with every component edit.',
  },
  {
    id: 7,
    layout: 'content',
    title: 'What’s in the Rulebook',
    cards: [
      { icon: '🎨', title: 'Vanilla CSS Modules', description: 'No Tailwind, no CSS-in-JS. Fully nested selectors that mirror the DOM.' },
      { icon: '🏷️', title: 'Tags Over Classes', description: 'Use > article before inventing .article-wrapper' },
      { icon: '↔️', title: 'Logical Properties', description: 'margin-block and padding-inline. No shorthand, no margin-top.' },
      { icon: '🌀', title: 'Fibonacci Values', description: '1.3rem means “tweak me”; 2.3125rem means “don’t touch”' },
      { icon: '🧱', title: 'Semantic HTML', description: 'section → article → div. Never a div inside a div.' },
      { icon: '➡️', title: 'Component Shape', description: 'Arrow functions, root is always a <section>, type for props' },
    ],
  },
  {
    id: 8,
    layout: 'content',
    title: 'My Favorite Weird Rule: Fibonacci',
    code: [
      {
        label: 'Fibonacci = safe to adjust',
        tone: 'good',
        content: code`
          padding-block: 1.3rem;
          font-size: 2.1rem;
          gap: 0.5rem;
          width: 34rem;
        `,
      },
      {
        label: 'Not Fibonacci = intentional',
        tone: 'neutral',
        content: code`
          height: 2.3125rem;  /* exact, do not change */
          border: 1px solid;  /* hard boundary */
        `,
      },
    ],
    takeaway: 'The numbers carry intent. A human or an AI can tell at a glance which values are fair game.',
  },

  // ─── SECTION 2: THE HONEYMOON ────────────────────────
  {
    id: 9,
    layout: 'section',
    title: 'The Honeymoon',
    subtitle: 'It read the rules! It followed the rules!',
    sectionNumber: '02',
  },
  {
    id: 10,
    layout: 'content',
    title: 'At First, It Just Worked',
    emoji: '💘',
    bullets: [
      'New components came back with a <section> root and a matching module class',
      'CSS nested like the DOM, margin-block everywhere, values on the Fibonacci scale',
      'It felt like pairing with a developer who had actually read the style guide',
      'I stopped reviewing for style and started reviewing for logic',
    ],
  },
  {
    id: 11,
    layout: 'content',
    title: 'What “Following the Rules” Looked Like',
    code: [
      {
        label: 'profile-card.tsx',
        tone: 'good',
        content: code`
          const ProfileCard = (props: ProfileCardProps) => {
            return (
              <section className={style['profile-card']}>
                <header>{props.name}</header>
                <ul>{props.tags.map(renderTag)}</ul>
              </section>
            );
          };
          export default ProfileCard;
        `,
      },
      {
        label: 'profile-card.module.css',
        tone: 'good',
        content: code`
          section.profile-card {
            padding-block: 1.3rem;
            padding-inline: 2rem;

            > header {
              font-size: 1.5rem;
              color: var(--color-primary);
            }
          }
        `,
      },
    ],
  },

  // ─── SECTION 3: THE DRIFT ────────────────────────────
  {
    id: 12,
    layout: 'section',
    title: 'The Drift',
    subtitle: 'Rules slowly became suggestions',
    sectionNumber: '03',
  },
  {
    id: 13,
    layout: 'content',
    title: 'Then Things Started Slipping',
    cards: [
      { icon: '📐', title: 'margin: 0 auto', description: 'Shorthand pairs and margin-top crept back in' },
      { icon: '🔢', title: '1.4rem, 0.75rem, 12px', description: 'Fibonacci quietly stopped being a thing' },
      { icon: '🍲', title: 'Div Soup', description: 'Wrappers inside wrappers inside wrappers' },
      { icon: '🏷️', title: 'Class Explosion', description: '.card-wrapper .card-inner .card-header-title' },
      { icon: '❗', title: '!important', description: 'The universal “I give up” of CSS' },
      { icon: '🧩', title: 'Wrong Shape', description: 'function declarations and <div> roots' },
    ],
  },
  {
    id: 14,
    layout: 'content',
    title: 'Drift in the Stylesheet',
    code: [
      {
        label: 'What I got',
        tone: 'bad',
        content: code`
          .card-wrapper {
            margin: 0 auto;
            padding-top: 12px;
            gap: 0.75rem;
          }
          .card-wrapper .card-title {
            font-size: 1.4rem;
            color: #333 !important;
          }
        `,
      },
      {
        label: 'What the rules say',
        tone: 'good',
        content: code`
          section.profile-card {
            margin-inline: auto;
            padding-block-start: 0.8rem;
            gap: 0.8rem;

            > h3 {
              font-size: 1.3rem;
              color: var(--color-text);
            }
          }
        `,
      },
    ],
  },
  {
    id: 15,
    layout: 'content',
    title: 'Drift in the Markup',
    code: [
      {
        label: 'What I got',
        tone: 'bad',
        content: code`
          export default function ProfileCard({ name }) {
            return (
              <div className="card-wrapper">
                <div className="card-inner">
                  <span className="label">
                    <span>{name}</span>
                  </span>
                </div>
              </div>
            );
          }
        `,
      },
      {
        label: 'What the rules say',
        tone: 'good',
        content: code`
          const ProfileCard = (props: ProfileCardProps) => {
            return (
              <section className={style['profile-card']}>
                <h3>{props.name}</h3>
              </section>
            );
          };
          export default ProfileCard;
        `,
      },
    ],
  },
  {
    id: 16,
    layout: 'content',
    title: 'My First Fix: Write the Rules LOUDER',
    code: [
      {
        label: 'Version 1',
        tone: 'neutral',
        content: code`
          Never ever use Triad values,
          i.e. margin: 1rem 2rem 1rem;
        `,
      },
      {
        label: 'Version 2',
        tone: 'neutral',
        content: code`
          Never use shorthand margin or padding with
          multiple values — this includes triad, pair
          (margin: 0 auto), and quad forms.

          All colors must be defined as custom properties.
          Component CSS modules must never contain literal
          hex, rgb(), rgba(), hsl(), or hsla() values.
        `,
      },
    ],
    takeaway: 'More words, more examples, more “never.” It helped for a while, and then the drift came back.',
  },
  {
    id: 17,
    layout: 'content',
    title: 'Why Did It Drift?',
    cards: [
      { icon: '🫗', title: 'Context Dilution', description: 'My rules are one file competing with thousands of tokens of code, chat, and tool output. The longer the session, the quieter they get.' },
      { icon: '🌐', title: 'The Internet Disagrees', description: 'The web has written margin: 0 auto a million times. I wrote “don’t” once. The training data wins the tiebreaker.' },
      { icon: '🤷', title: 'No Consequences', description: 'Breaking a rule in an instructions file costs nothing. Nothing fails, nothing turns red, nobody notices until review.' },
    ],
  },
  {
    id: 18,
    layout: 'content',
    title: 'The Realization',
    emoji: '💡',
    bullets: [
      'Instructions are read probabilistically, so they will always be a suggestion',
      'You can’t write your way out of it with bigger, louder markdown',
      'Humans have the same problem, and we solved it years ago',
      'We don’t trust developers to remember the style guide. We run a linter.',
    ],
    takeaway: 'Stop asking the AI to remember. Make the rules impossible to forget.',
  },

  // ─── SECTION 4: REGAINING CONTROL ────────────────────
  {
    id: 19,
    layout: 'section',
    title: 'Regaining Control',
    subtitle: 'Turning suggestions into build failures',
    sectionNumber: '04',
  },
  {
    id: 20,
    layout: 'comparison',
    title: 'Instructions vs. Linters',
    comparison: {
      before: {
        heading: 'Instructions Alone',
        items: [
          'Read probabilistically',
          'Fade as the context grows',
          'Fail silently',
          'Caught (maybe) in code review',
        ],
      },
      after: {
        heading: 'Instructions + Linters',
        items: [
          'Checked deterministically',
          'Every file, every time',
          'Fail loudly with a line number',
          'Caught before the AI says “done”',
        ],
      },
    },
  },
  {
    id: 21,
    layout: 'content',
    title: 'The Plan',
    orderedCards: true,
    cards: [
      { icon: '🔍', title: 'Audit the Rules', description: 'Go through the instructions file and find every rule a machine could check' },
      { icon: '🎨', title: 'Stylelint for CSS', description: 'Built-in rules first, then a custom plugin for the weird stuff' },
      { icon: '🧱', title: 'ESLint for Markup', description: 'Custom JSX rules for nesting and component shape' },
      { icon: '🔁', title: 'Close the Loop', description: 'Make the AI run the linters and fix everything before it finishes' },
    ],
  },
  {
    id: 22,
    layout: 'content',
    title: 'Stylelint: Built-in Rules Go a Long Way',
    code: [
      {
        label: 'stylelint.config.js',
        content: code`
          export default {
            plugins: [fibonacciValues],
            rules: {
              'local/fibonacci-values': true,
              'declaration-no-important': true,
              'color-no-hex': true,
              'function-disallowed-list': ['rgb', 'rgba', 'hsl', 'hsla'],
              'property-disallowed-list': [
                '/^(margin|padding)-(top|right|bottom|left)$/',
              ],
              'declaration-property-value-disallowed-list': {
                '/^(margin|padding)$/': ['/\\s/'],
              },
              'selector-max-class': 1,
            },
          };
        `,
      },
    ],
  },
  {
    id: 23,
    layout: 'content',
    title: 'Stylelint: A Custom Rule for Fibonacci',
    code: [
      {
        label: 'fibonacci-values.js',
        content: code`
          const FIB = new Set(['0', '1', '2', '3', '5', '8', '13', '21', '34', '55']);
          const isFib = (num) => num.split('.').every((part) => FIB.has(part));

          const rule = () => (root, result) => {
            root.walkDecls((decl) => {
              if (decl.prop.startsWith('--')) return;
              for (const [, num] of decl.value.matchAll(/(\d*\.?\d+)(?:rem|em)\b/g)) {
                if (!isFib(num.replace(/^\./, '0.'))) {
                  utils.report({ ruleName, result, node: decl, message: messages.rejected(num) });
                }
              }
            });
          };

          export default createPlugin('local/fibonacci-values', rule);
        `,
      },
    ],
    takeaway: 'Intentional exact values still work: they move into a named custom property, which makes the intent explicit.',
  },
  {
    id: 24,
    layout: 'content',
    title: 'ESLint: A Custom Rule for Same-Element Nesting',
    code: [
      {
        label: 'no-same-element-nesting.js',
        content: code`
          const noSameElementNesting = {
            meta: {
              type: 'problem',
              messages: {
                nested: '<{{tag}}> inside <{{tag}}>. Use section → article → div, or a pseudo-element.',
              },
            },
            create: (context) => ({
              JSXElement: (node) => {
                const tag = node.openingElement.name.name;
                const isNested = context.sourceCode
                  .getAncestors(node)
                  .some((a) => a.type === 'JSXElement' && a.openingElement.name.name === tag);
                if (isNested) context.report({ node, messageId: 'nested', data: { tag } });
              },
            }),
          };
        `,
      },
    ],
  },
  {
    id: 25,
    layout: 'content',
    title: 'ESLint: Enforcing Component Shape',
    code: [
      {
        label: 'eslint.config.js',
        content: code`
          rules: {
            'local/no-same-element-nesting': 'error',
            'func-style': ['error', 'expression'],
            'no-restricted-syntax': ['error', {
              selector:
                'Program > ExportDefaultDeclaration > FunctionDeclaration, ' +
                'VariableDeclarator > ArrowFunctionExpression > BlockStatement > ReturnStatement ' +
                '> JSXElement > JSXOpeningElement > JSXIdentifier[name!=/^(section|dialog)$/]',
              message: 'Components are arrow functions whose root element is <section>.',
            }],
          },
        `,
      },
    ],
    takeaway: 'You don’t always need a plugin. An AST selector in no-restricted-syntax covers a lot of house rules.',
  },
  {
    id: 26,
    layout: 'content',
    title: 'The Drift, Caught',
    code: [
      {
        label: 'npx stylelint',
        tone: 'bad',
        content: code`
          2:11  ×  Disallowed value "0 auto" for property "margin"
          3:3   ×  Disallowed property "padding-top"
          4:3   ×  "1.4" is not Fibonacci. Use 1, 2, 3, 5, 8, 13…
          6:10  ×  Disallowed hex color "#333"
          6:15  ×  Disallowed !important
          7:15  ×  Disallowed function "rgba"
        `,
      },
      {
        label: 'npx eslint',
        tone: 'bad',
        content: code`
          1:16  error  Components are arrow functions
                       whose root element is <section>
          4:7   error  <div> inside <div>. Use
                       section → article → div
          5:33  error  <span> inside <span>. Use
                       section → article → div
        `,
      },
    ],
  },
  {
    id: 27,
    layout: 'content',
    title: 'Closing the Loop',
    cards: [
      { icon: '🤖', title: 'Tell the AI to Lint', description: 'Add a rule to the instructions file: run npm run lint and fix every error before you finish' },
      { icon: '🔴', title: 'Squiggles Are Feedback', description: 'Agents read the Problems panel too. Red underlines get fixed without me asking.' },
      { icon: '🪝', title: 'Pre-commit Hook', description: 'Nothing gets committed with a violation, whether a human or an AI wrote it' },
      { icon: '🚦', title: 'CI Gate', description: 'The build fails. Not a suggestion. Not a guideline. A red X.' },
    ],
  },
  {
    id: 28,
    layout: 'content',
    title: 'The Error Message Is a Prompt',
    code: [
      {
        label: 'Tells the AI what’s wrong',
        tone: 'bad',
        content: code`
          Unexpected value "1.4"
        `,
      },
      {
        label: 'Tells the AI how to fix it',
        tone: 'good',
        content: code`
          "1.4" is not Fibonacci. Use 1, 2, 3, 5, 8, 13…
          or move to a custom property if the value is intentional.
        `,
      },
    ],
    takeaway: 'Write lint messages for the AI. A good message turns a failure into a one-shot fix.',
  },

  // ─── BEYOND LINTERS ──────────────────────────────────
  {
    id: 29,
    layout: 'content',
    title: 'Other Tools in the Toolbox',
    cards: [
      { icon: '🧑‍⚖️', title: 'AI Judges', description: 'A second agent reviews the diff against the rulebook. Catches judgment calls like “every element must earn its place.”' },
      { icon: '🧰', title: 'Skills', description: 'Task-specific instructions loaded only when needed, like a “create component” skill. Less context, less dilution.' },
      { icon: '🪝', title: 'Agent Hooks', description: 'Run the linter automatically after every edit. The AI can’t skip a step it never has to remember.' },
      { icon: '🏗️', title: 'Scaffolds & Golden Files', description: 'Generators and reference components. The AI copies its neighbors, so give it good neighbors.' },
      { icon: '🧼', title: 'Fresh Context', description: 'Short sessions and subagents with focused tasks. The rules stay loud when the context stays small.' },
      { icon: '🧪', title: 'Tests That Assert Style', description: 'Accessibility checks with axe and visual regression tests catch what a linter can’t see.' },
    ],
  },
  {
    id: 30,
    layout: 'content',
    title: 'My Pick: Layer Your Defenses',
    orderedCards: true,
    cards: [
      { icon: '🛡️', title: 'Prevent', description: 'Skills, scaffolds, golden files' },
      { icon: '🚨', title: 'Detect', description: 'Lint every rule a machine can check' },
      { icon: '🔁', title: 'Automate', description: 'Hooks, pre-commit, and CI' },
      { icon: '🧑‍⚖️', title: 'Judge', description: 'AI review, only for what linters can’t check' },
    ],
    takeaway: 'Deterministic first, probabilistic last. An AI judge is still a suggestion, just a pricier one.',
  },

  // ─── WRAP-UP ─────────────────────────────────────────
  {
    id: 31,
    layout: 'section',
    title: 'Lessons Learned',
    subtitle: 'What I’d tell myself on day one',
    sectionNumber: '05',
  },
  {
    id: 32,
    layout: 'content',
    title: 'Lessons Learned',
    cards: [
      { icon: '📖', title: 'Instructions Teach the Why', description: 'Keep the instructions file. It explains intent, judgment calls, and the rules a linter can’t check.' },
      { icon: '⚖️', title: 'Linters Enforce the What', description: 'If a rule matters, make it fail. If it can’t fail, it’s a suggestion.' },
      { icon: '🗣️', title: 'Messages Are Prompts', description: 'Every lint error is an instruction delivered at exactly the right moment' },
      { icon: '🚪', title: 'Explicit Escape Hatches', description: 'An exact value gets a name: --header-height says “I meant to do this.”' },
    ],
  },
  {
    id: 33,
    layout: 'comparison',
    title: 'Before and After',
    comparison: {
      before: {
        heading: 'Before Linters',
        items: [
          'Rules drifted silently',
          'Reviews full of style nitpicks',
          'Rewrote the instructions in ALL CAPS',
          'Hoped the AI would remember',
        ],
      },
      after: {
        heading: 'After Linters',
        items: [
          'Violations caught in seconds',
          'AI self-corrects from the error output',
          'Reviews focus on logic and design',
          'Rules are rules again',
        ],
      },
    },
  },
  {
    id: 34,
    layout: 'quote',
    title: 'The Takeaway',
    quote: 'An instruction is a suggestion. A failing build is a best practice.',
    quoteAuthor: 'Me, after deleting my 400th margin: 0 auto',
  },
  {
    id: 35,
    layout: 'title',
    title: 'Thank You! 🙌',
    subtitle: 'Questions?',
    presenter: 'Caleb Haldane',
    presenterTitle: 'May your builds be green and your margins be logical',
  },
];
