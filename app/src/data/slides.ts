import { SlideData } from '../components/slide-deck/slide-deck.types';

export const slides: SlideData[] = [
  // ─── INTRO ───────────────────────────────────────────
  {
    id: 1,
    layout: 'title',
    title: 'Application Development',
    subtitle: 'How Building Software Changed — and Keeps Changing',
    presenter: 'Caleb Haldane',
    presenterTitle: 'Senior Developer · 20+ Years in the Industry',
  },
  {
    id: 2,
    layout: 'content',
    title: 'Who Am I?',
    emoji: '👋',
    bullets: [
      'Senior Developer at Love\'s Travel Stops — platform with 1M+ monthly visits',
      'Director of I.T. at Soonercon — built a team of 10 from scratch',
      'Started coding in C on Linux in 2002, before "the cloud" was a thing',
      'Survived VB6, rode the .NET wave, landed in React & Node.js',
      'I\'ve watched every major shift firsthand — and I\'m still here',
    ],
  },
  {
    id: 3,
    layout: 'content',
    title: 'What This Talk Is About',
    cards: [
      { icon: '🔄', title: 'Change is Constant', description: 'Every few years, something new transforms how we build software' },
      { icon: '🛠️', title: 'Tools, Not Threats', description: 'Each new leap becomes another tool in your belt — not a replacement for you' },
      { icon: '🎯', title: 'Your Career', description: 'Understanding the evolution helps you navigate what comes next' },
      { icon: '🔐', title: 'Security Matters', description: 'As the stack changes, so does the attack surface — your skills are critical' },
    ],
  },

  // ─── SECTION 1: THE EARLY DAYS ───────────────────────
  {
    id: 4,
    layout: 'section',
    title: 'The Early Days',
    subtitle: 'When "deployment" meant a zip file and a prayer',
    sectionNumber: '01',
  },
  {
    id: 5,
    layout: 'content',
    title: 'The 2000s: Desktop Was King',
    imageUrl: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=800&q=80',
    imageAlt: 'Vintage CRT monitor on a desk representing early 2000s computing',
    bullets: [
      'Visual Basic 6 and Windows Forms dominated business apps',
      'Every app was installed on every machine — updates were a nightmare',
      'The "server room" was a closet down the hall with a box humming in it',
      'Version control? That was a folder named "ProjectFinal_v3_REAL"',
    ],
  },
  {
    id: 6,
    layout: 'content',
    title: 'Deploying in the Old Days',
    emoji: '😱',
    comparison: {
      before: {
        heading: 'How It Worked',
        items: [
          'Copy DLLs to the server manually',
          'Pray the GAC was in sync',
          'Hope nobody else was deploying at the same time',
          'Rollback = "does anyone have the old files?"',
        ],
      },
      after: {
        heading: 'What Could Go Wrong',
        items: [
          'GAC out of sync → instant outage',
          'Wrong file version → silent bugs',
          'No audit trail → "who touched this?"',
          'Friday deploys → weekend on-call nightmares',
        ],
      },
    },
    story: 'I lived this. The GAC (Global Assembly Cache) was the bane of our existence. One mismatched DLL and the whole app would crash. No containers, no rollbacks — just fingers crossed and a lot of coffee.',
  },
  {
    id: 7,
    layout: 'content',
    title: 'Stateful vs Stateless',
    subtitle: 'The Shift That Changed Everything',
    bullets: [
      'Early web apps tried to act like desktop apps — storing session state on the server',
      'ViewState in ASP.NET could balloon a page to megabytes of hidden data',
      'Scaling meant "sticky sessions" — tying users to specific servers',
      'Then REST came along and said: "Every request is independent"',
    ],
    story: 'When I first truly understood MVC and REST, it was a genuine "aha" moment. Stateless architecture meant you could scale horizontally, load balance freely, and stop worrying about session affinity. It felt like the training wheels came off.',
    takeaway: 'Understanding stateless design is still one of the most valuable concepts in modern development — and in securing applications.',
  },

  // ─── SECTION 2: THE WEB REVOLUTION ───────────────────
  {
    id: 8,
    layout: 'section',
    title: 'The Web Revolution',
    subtitle: 'From server-rendered pages to single-page apps',
    sectionNumber: '02',
  },
  {
    id: 9,
    layout: 'content',
    title: 'The Rise of Web Applications',
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
    imageAlt: 'Code on a screen representing modern web development',
    bullets: [
      'ASP.NET Web Forms → ASP.NET MVC → Web API + SPA frontends',
      'jQuery made the DOM bearable, then Angular made it declarative',
      'REST APIs separated the frontend from the backend — forever',
      'JavaScript went from "toy language" to running everything',
    ],
  },
  {
    id: 10,
    layout: 'content',
    title: 'My Framework Journey',
    emoji: '🗺️',
    orderedCards: true,
    cards: [
      { icon: '\u{1F427}', title: 'C + X Window on Linux', description: 'Where it all started — desktop apps in C with X Window for screen management. Raw, powerful, and unforgiving.' },
      { icon: '\u{1F5A5}\u{FE0F}', title: 'VB6 → VB.NET → C#', description: 'Desktop apps with Windows Forms. Every update meant reinstalling on every machine.' },
      { icon: '🌐', title: 'ASP.NET → MVC', description: 'Server-rendered HTML. The browser was just a display — the server did everything.' },
      { icon: '⚡', title: 'Angular 1.4 + .NET APIs', description: 'First taste of SPAs. Two-way data binding felt like magic.' },
      { icon: '⚛️', title: 'React + Node.js → Next.js', description: 'Component-based UI. Server-side rendering came full circle.' },
    ],
  },
  {
    id: 11,
    layout: 'quote',
    title: '',
    quote: 'The best developers are not the ones who know the most frameworks. They\'re the ones who can learn the next one — because they understand the fundamentals underneath.',
    quoteAuthor: 'Every senior dev who survived a framework migration',
    takeaway: 'Frameworks come and go. Problem-solving skills, security awareness, and understanding architecture patterns — those are forever.',
  },

  // ─── SECTION 3: INFRASTRUCTURE ───────────────────────
  {
    id: 12,
    layout: 'section',
    title: 'Infrastructure',
    subtitle: 'From server closets to infinite scale',
    sectionNumber: '03',
  },
  {
    id: 13,
    layout: 'content',
    title: 'The Server Room Era',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    imageAlt: 'Server room with rows of blinking servers',
    bullets: [
      'Physical servers that you could hear humming from the hallway',
      'Capacity planning meant buying hardware months in advance',
      '"Scaling up" meant buying a bigger box',
      'The admin who knew the server names by heart was the most valuable person on the team',
    ],
  },
  {
    id: 14,
    layout: 'content',
    title: 'Then Came Virtualization',
    comparison: {
      before: {
        heading: 'Physical Servers',
        items: [
          'One app per server (waste of resources)',
          'Hardware failure = total downtime',
          'Weeks to provision a new server',
          'Patching meant physical access',
        ],
      },
      after: {
        heading: 'Virtual Machines',
        items: [
          'Multiple VMs on one physical host',
          'Snapshots and live migration',
          'New server in minutes, not weeks',
          'Isolation between workloads',
        ],
      },
    },
    takeaway: 'VMs were a huge leap — but they still carried the full weight of an OS. Something lighter was coming.',
  },
  {
    id: 15,
    layout: 'quote',
    title: 'Cattle, Not Pets',
    emoji: '🐄',
    quote: 'In the old days, servers were pets. You gave them names, you nursed them back to health when they were sick, and when they died, you cried. In the new world, servers are cattle. You number them, and when one gets sick, you shoot it and replace it.',
    quoteAuthor: 'Bill Baker, Microsoft (paraphrased)',
  },
  {
    id: 16,
    layout: 'content',
    title: 'The Cattle Mindset',
    emoji: '🐄',
    bullets: [
      'Pet servers: hand-configured, irreplaceable, lovingly maintained',
      'Cattle servers: identical, disposable, spun up from automation',
      'This mindset shift unlocked everything that came after — containers, cloud, auto-scaling',
      'If your infrastructure can\'t be rebuilt from a script, it\'s a pet — and that\'s a risk',
    ],
    takeaway: 'When you treat infrastructure as disposable and reproducible, security patching goes from "scary change window" to "just redeploy."',
  },

  // ─── SECTION 4: DOCKER ───────────────────────────────
  {
    id: 17,
    layout: 'section',
    title: 'Docker & Containers',
    subtitle: '"It works on my machine" → "It works everywhere"',
    sectionNumber: '04',
  },
  {
    id: 17,
    layout: 'content',
    title: 'What Is Docker?',
    imageUrl: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&q=80',
    imageAlt: 'Shipping containers at a port representing Docker containers',
    bullets: [
      'Package your app + its dependencies into a single, portable unit',
      'Runs the same way on your laptop, in CI, and in production',
      'Lightweight — shares the host OS kernel, unlike VMs',
      'Disposable — spin up, tear down, no side effects',
    ],
  },
  {
    id: 18,
    layout: 'content',
    title: 'Docker Changed the Game',
    cards: [
      { icon: '📦', title: 'Consistency', description: 'Since it works on my machine, let\'s just ship my machine! That\'s basically what a container is.' },
      { icon: '🚀', title: 'Speed', description: 'Containers start in seconds, not minutes. Development and deployment got dramatically faster.' },
      { icon: '🔒', title: 'Isolation', description: 'Each container is sandboxed. A vulnerability in one app does not compromise the others.' },
      { icon: '♻️', title: 'Reproducibility', description: 'Infrastructure as code. Your Dockerfile IS your documentation.' },
    ],
  },
  {
    id: 19,
    layout: 'content',
    title: 'Containers & Security',
    emoji: '🛡️',
    bullets: [
      'Smaller attack surface — minimal OS, only what the app needs',
      'Immutable deployments — no drift between environments',
      'Image scanning catches vulnerabilities before they ship',
      'But containers are NOT a security boundary by default — configuration matters',
      'As SecOps: you\'ll be scanning images, enforcing policies, and auditing registries',
    ],
    story: 'My homelab at home is now exclusively Docker. Every service — from media servers to dev environments — runs in containers. At work, we migrated deployments back to our team using Docker + cloud infra. It gave us control we hadn\'t had in years.',
    takeaway: 'Container security is one of the hottest skills in the industry right now. Understanding Docker gives you a massive advantage.',
  },

  // ─── SECTION 5: CLOUD ───────────────────────────────
  {
    id: 20,
    layout: 'section',
    title: 'The Cloud',
    subtitle: 'Someone else\'s computer — with an API',
    sectionNumber: '05',
  },
  {
    id: 21,
    layout: 'content',
    title: 'What Is "The Cloud"?',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    imageAlt: 'Earth from space with network connections representing cloud computing',
    bullets: [
      'On-demand computing resources — servers, storage, databases, AI — via the internet',
      'Pay for what you use, scale up and down automatically',
      'Major providers: AWS, Azure, Google Cloud',
      'No more buying hardware. No more capacity planning guesswork.',
    ],
  },
  {
    id: 22,
    layout: 'content',
    title: 'Cloud Service Models',
    cards: [
      { icon: '🏗️', title: 'IaaS', description: 'Infrastructure as a Service — Virtual machines, networking, storage. You manage the OS up.' },
      { icon: '⚙️', title: 'PaaS', description: 'Platform as a Service — Deploy your code, the platform handles servers, scaling, patching.' },
      { icon: '📱', title: 'SaaS', description: 'Software as a Service — Ready-made apps. Gmail, Slack, Office 365. Just sign up and use.' },
    ],
  },
  {
    id: 23,
    layout: 'content',
    title: 'CI/CD: The Deployment Pipeline',
    emoji: '🔄',
    bullets: [
      'CI = Continuous Integration — automatically build and test every code change',
      'CD = Continuous Deployment — automatically ship tested code to production',
      'No more manual file copying. No more GAC nightmares.',
      'A developer pushes code → tests run → it\'s live in minutes',
      'Rollbacks are instant — just deploy the previous version',
    ],
  },
  {
    id: 24,
    layout: 'content',
    title: 'Deployments: Then vs Now',
    comparison: {
      before: {
        heading: '2005 Deployment',
        items: [
          'RDP into the server',
          'Stop the app pool',
          'Copy files via Explorer',
          'Restart and hope for the best',
        ],
      },
      after: {
        heading: '2026 Deployment',
        items: [
          'git push to main',
          'Pipeline builds, tests, scans',
          'Auto-deploys to staging',
          'One click to promote to production',
        ],
      },
    },
  },
  {
    id: 25,
    layout: 'content',
    title: 'Cloud Security Is Its Own Discipline',
    emoji: '🔐',
    bullets: [
      'Shared responsibility model — the provider secures the infra, YOU secure your config',
      'Misconfigured S3 buckets have leaked billions of records',
      'Identity and Access Management (IAM) is the #1 attack vector',
      'Zero Trust: never assume the network is safe, verify everything',
      'Cloud security certifications (AWS Security, AZ-500) are in massive demand',
    ],
    takeaway: 'Cloud security is where SecOps meets DevOps. It\'s called DevSecOps — and the industry can\'t hire fast enough.',
  },

  // ─── SECTION 6: AI ──────────────────────────────────
  {
    id: 26,
    layout: 'section',
    title: 'AI in Development',
    subtitle: 'Your new pair programming partner',
    sectionNumber: '06',
  },
  {
    id: 27,
    layout: 'content',
    title: 'AI: The Latest Force Multiplier',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    imageAlt: 'Abstract AI neural network visualization',
    bullets: [
      'AI-assisted coding tools like GitHub Copilot write code alongside you',
      'Not replacing developers — amplifying them',
      'I use Copilot with Claude. It\'s like having an on-demand pair programmer.',
      'It handles the boilerplate so I can focus on architecture and problem-solving',
    ],
  },
  {
    id: 28,
    layout: 'content',
    title: 'What AI Can (and Can\'t) Do',
    comparison: {
      before: {
        heading: 'AI Struggles With',
        items: [
          'Understanding your business context',
          'Making architectural decisions',
          'Knowing when requirements are wrong',
          'Replacing human judgment on security',
          "Having opinions on tech choices — it\'s agnostic, not visionary",
          "Forecasting the future",
          "Creating manageable, secure code without human review",
        ],
      },
      after: {
        heading: 'AI Excels At',
        items: [
          'Writing boilerplate and repetitive code',
          'Explaining unfamiliar codebases',
          'Catching common bugs and vulnerabilities',
          'Generating tests and documentation',
          'Reading web APIs and summarizing docs — it\'s like a supercharged Stack Overflow',
          'Navigating unfamiliar languages and frameworks — it can be your translator',
        ],
      },
    },
    takeaway: 'AI will not take your job. A person who knows how to use AI will outperform one who doesn\'t. It\'s a force multiplier, not a replacement.',
  },
  {
    id: 29,
    layout: 'content',
    title: 'AI & Security Operations',
    subtitle: 'I did not write this slide; AI did — but it is apparently relevant to the audience, so here we are.',
    emoji: '🤖',
    bullets: [
      'AI-powered SIEM tools detect anomalies humans would miss',
      'Automated threat intelligence — correlating millions of events in real-time',
      'AI can generate phishing emails too — defenders need to understand the offense',
      'Prompt injection, model poisoning, data leakage — new attack surfaces to learn',
      'The defenders who understand AI will be the ones who keep us safe',
    ],
  },

  // ─── SECTION 7: THE PATTERN ─────────────────────────
  {
    id: 30,
    layout: 'section',
    title: 'The Pattern',
    subtitle: 'What 20 years of change has taught me',
    sectionNumber: '07',
  },
  {
    id: 31,
    layout: 'content',
    title: 'Every Leap Follows the Same Arc',
    emoji: '📈',
    bullets: [
      '1. Something new appears and people panic — "This changes everything!"',
      '2. Early adopters figure it out and it\'s messy',
      '3. Best practices emerge and tooling matures',
      '4. It becomes just another tool in the toolbelt',
      '5. The next thing appears... repeat',
    ],
    story: 'I\'ve seen this cycle with search engines, Stack Overflow, containers, cloud, and now AI. Every single time, the people who leaned in and learned came out ahead. The people who resisted got left behind — not because the tech replaced them, but because they stopped growing.',
  },
  {
    id: 32,
    layout: 'content',
    title: 'My Career as a Timeline',
    bullets: [
      '2002 — C on Linux at my first job, building mortgage processing software',
      '2005 — VB6 and .NET desktop apps, manual deployments, the GAC era',
      '2012 — ASP.NET MVC, jQuery, AJAX — the web takes over',
      '2015 — Angular SPAs, REST APIs, the frontend/backend split',
      '2018 — React, Node.js, Docker in my homelab, CI/CD pipelines',
      '2024 — Next.js, AI-assisted coding, cloud-native everything',
      '2026 — Still learning. Still adapting. Still here.',
    ],
  },
  {
    id: 33,
    layout: 'quote',
    title: '',
    quote: 'The only constant in technology is change. Your value isn\'t in what you know today — it\'s in your ability to learn what you\'ll need tomorrow.',
    quoteAuthor: 'Caleb Haldane',
  },

  // ─── CLOSING ────────────────────────────────────────
  {
    id: 34,
    layout: 'content',
    title: 'Your Takeaways',
    cards: [
      { icon: '🔧', title: 'Tools, Not Threats', description: 'Every major leap — cloud, containers, AI — becomes a tool you wield, not a threat to fear.' },
      { icon: '📚', title: 'Fundamentals Win', description: 'Languages and frameworks change. Problem-solving, security thinking, and curiosity don\'t.' },
      { icon: '🔐', title: 'Security Is Everywhere', description: 'Every layer of the stack needs defenders. Your SecOps skills are more relevant than ever.' },
      { icon: '🚀', title: 'Lean In', description: 'The best time to learn new tech is before you have to. Stay curious, build stuff, break stuff.' },
    ],
  },
  {
    id: 35,
    layout: 'content',
    title: 'This Slide Deck Was Built With AI',
    emoji: '🤯',
    bullets: [
      'This entire React application was built using GitHub Copilot with Claude',
      'From scaffolding to content to styling — AI-assisted the whole way',
      'I guided it with my experience, context, and judgment',
      'That\'s the future: human expertise + AI amplification',
      'The developer is still the one driving. AI is the co-pilot.',
    ],
  },
  {
    id: 36,
    layout: 'image',
    title: 'View These Slides Anytime',
    subtitle: 'slides.caldane.net/app-dev',
    presenter: 'Bookmark this URL — the slides will stay up!',
    imageUrl: '/app-dev/qr-code.svg',
    imageAlt: 'QR code for slides.caldane.net/app-dev',
  },
  {
    id: 37,
    layout: 'title',
    title: 'Questions?',
    subtitle: 'Let\'s talk about tech, careers, and the future',
    presenter: 'Caleb Haldane',
    presenterTitle: 'github.com/caldane · linkedin.com/in/caleb-haldane',
  },
];
