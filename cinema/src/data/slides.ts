import { SlideData } from '../components/slide-deck/slide-deck.types';

const img = (name: string) => `${import.meta.env.BASE_URL}images/${name}`;

export const slides: SlideData[] = [
  // ─── INTRO ───────────────────────────────────────────
  {
    id: 1,
    layout: 'title',
    title: 'Content Creators Are Ruining Cinema',
    subtitle: 'A Totally Serious Investigation into Ring Lights, Prop Microphones & Other Crimes',
    presenter: 'Caleb Haldane',
    presenterTitle: 'Self-Appointed Film Critic · Has Seen Several Movies',
  },
  {
    id: 2,
    layout: 'content',
    title: 'Legal Disclaimer',
    emoji: '⚠️',
    bullets: [
      'I am not a film critic',
      'I have watched YouTube videos about film, which is basically film school',
      'Everything in this presentation is my opinion, and therefore fact',
      'No ring lights were harmed in the making of this deck. Several were judged.',
    ],
  },
  {
    id: 3,
    layout: 'quote',
    title: 'The Thesis',
    images: [
      { url: img('absolute-cinema-meme.jpg'), alt: 'Martin Scorsese raising both hands with the caption “Absolute Cinema”' },
    ],
    quote: 'Cinema spent 130 years perfecting light, framing, and sound. Content creators looked at all of it and said: “What if banana?”',
    quoteAuthor: 'Martin Scorsese, probably (he did not say this)',
  },
  {
    id: 4,
    layout: 'content',
    title: 'Today’s Evidence',
    orderedCards: true,
    cards: [
      { icon: '💍', title: 'Exhibit A: The Ring Light', description: 'It was supposed to be a glint. It became a donut.' },
      { icon: '🍌', title: 'Exhibit B: The Prop Microphone', description: 'It’s a banana. We can all see it’s a banana.' },
      { icon: '🚗', title: 'Exhibit C: Lightning Round', description: 'Parked cars, bouncing subtitles & more' },
      { icon: '⚖️', title: 'The Verdict', description: 'Is cinema ruined? (Yes. Mostly. Kind of.)' },
    ],
  },

  // ─── EXHIBIT A: THE RING LIGHT ───────────────────────
  {
    id: 5,
    layout: 'section',
    title: 'Exhibit A: The Ring Light',
    subtitle: 'A lamp that thinks it’s a personality',
    sectionNumber: '01',
  },
  {
    id: 6,
    layout: 'content',
    title: 'What a Ring Light Is Actually For',
    emoji: '✨',
    bullets: [
      'It’s meant to sit FAR away from the subject, so the ring shrinks to a tiny glint in the eye',
      'The camera shoots through the hole, so that glint shows up from every angle',
      'It’s a hack: the camera operator never has to chase the catchlight again',
      'Fun fact: the ring flash was invented in 1952… for photographing teeth',
    ],
    takeaway: 'It is supposed to be a glint. NOT A DONUT.',
  },
  {
    id: 7,
    layout: 'content',
    title: 'Ring Lights: Expectation vs. Reality',
    comparison: {
      before: {
        heading: 'How Creators Use It',
        items: [
          'Eighteen inches from the face',
          'A giant glowing donut in each eyeball',
          'Phone in the middle, eyes on the comments',
          'Two ring lights. Why. Who hurt you.',
        ],
      },
      after: {
        heading: 'How It Was Designed',
        items: [
          'Placed far back so the ring becomes a glint',
          'Camera shoots through the middle',
          'Catchlight from every angle, zero effort',
          'Swapped out when the shot needs a different look',
        ],
      },
    },
  },
  {
    id: 8,
    layout: 'content',
    title: 'Once You See It…',
    emoji: '👁️',
    bullets: [
      'Look at any creator’s eyes. Not a glint. Two glowing donuts.',
      'It’s in their glasses. It’s in their sunglasses. It’s in the window behind them.',
      'Every reaction video. Every “get ready with me.” Every apology video.',
      'You will now see this for the rest of your life. You’re welcome.',
    ],
    story: 'I noticed this at 2 AM and have not been at peace since. I paused a video just to zoom in on a stranger’s pupils. Chelsea asked what I was doing. I did not have a good answer.',
  },
  {
    id: 9,
    layout: 'image',
    title: 'Count the Donuts 🍩',
    imageAspectRatio: '3 / 4',
    images: [
      { url: img('bad-ring-light-donut-1.jpg'), alt: 'Creator with a ring light reflected as a donut in each eye', caption: 'Exhibit A-1: The Classic Glazed' },
      { url: img('bad-ring-light-donut-2.jpg'), alt: 'Creator leaning into the camera with ring light donuts in both eyes', caption: 'Exhibit A-2: Extra Large, Extra Close' },
      { url: img('bad-ring-light-donut-3.jpg'), alt: 'Close-up of a creator with ring light donuts in their eyes', caption: 'Exhibit A-3: The Beauty Close-Up' },
    ],
  },
  {
    id: 10,
    layout: 'content',
    title: 'Field Guide: Ring Light Species',
    cards: [
      { icon: '🦩', title: 'The Sideways Lurker', description: 'Placed 45° off-axis, making it a $60 lamp with commitment issues' },
      { icon: '👯', title: 'The Double Halo', description: 'Two ring lights = four donuts per face. The eyes now resemble a slot machine.' },
      { icon: '🤓', title: 'The Glasses Eclipse', description: 'Hovers over both lenses like an angel who sells supplements' },
      { icon: '📱', title: 'The Phone Hostage', description: 'Phone clamped dead center, creator staring at a second phone to the left' },
    ],
  },
  {
    id: 11,
    layout: 'image',
    title: 'Specimens',
    images: [
      { url: img('correct-ring-light-example-1.jpg'), alt: 'Man lit evenly with a ring light behind him', caption: '✅ The right way. Look, a glint!' },
      { url: img('bad-ring-light-just-use-fill-light-1.jpg'), alt: 'Woman in profile beside a ring light placed off to the side', caption: '🦩 The Sideways Lurker. Just use a fill light.' },
    ],
  },
  {
    id: 12,
    layout: 'content',
    title: 'Meanwhile, in Actual Cinema',
    emoji: '🎬',
    bullets: [
      'A glint from every angle is a convenience, not always a feature',
      'Cinematographers often WANT the glint off-axis, like it came from a window or a lamp',
      'An off-axis glint gives the eye direction, mood, and a light source that makes sense',
      'Content creators: one light, 18 inches away, face looks abducted by a UFO',
    ],
    takeaway: 'Cinema chooses where the glint goes. Creators let a donut choose for them.',
  },

  // ─── EXHIBIT B: THE PROP MICROPHONE ──────────────────
  {
    id: 13,
    layout: 'section',
    title: 'Exhibit B: The Prop Microphone',
    subtitle: 'Mic check, one two… is this a cucumber?',
    sectionNumber: '02',
  },
  {
    id: 14,
    layout: 'content',
    title: 'The Phenomenon',
    emoji: '🎤',
    bullets: [
      'A person holds an object up to their mouth like a microphone',
      'The object is not a microphone',
      'It is a banana. A hairbrush. A TV remote. An unplugged mic, which is somehow worse.',
      'Meanwhile, the real mic is clipped to their shirt doing all the work, uncredited',
    ],
    takeaway: 'The lav mic is the real hero. It deserves a raise and a SAG card.',
  },
  {
    id: 15,
    layout: 'content',
    title: 'Official Prop Mic Tier List',
    cards: [
      { icon: '🏆', title: 'S Tier: Hairbrush', description: 'Earned in a bathroom mirror at age 9. Grandfathered in. Untouchable.' },
      { icon: '🥈', title: 'B Tier: Banana', description: 'Lazy, but at least you can eat the evidence' },
      { icon: '🥉', title: 'D Tier: Unplugged Real Mic', description: 'You own a real microphone and chose violence' },
      { icon: '🗑️', title: 'F Tier: A Second Phone', description: 'Holding a phone to your mouth while being filmed by another phone. Peak civilization.' },
    ],
  },
  {
    id: 16,
    layout: 'image',
    title: 'Spotted in the Wild',
    images: [
      { url: img('hairbrush-mic.jpg'), alt: 'Street interview using a hairbrush as a microphone', caption: '🏆 S Tier hairbrush, live in the field' },
      { url: img('labubu-microphone.jpg'), alt: 'Creator holding a plush toy with a lapel mic clipped to it', caption: '📎 A lapel mic clipped to a plushie' },
      { url: img('has-lapel-mic-clipped-to-card.jpg'), alt: 'Two people on a subway holding MetroCards with lapel mics clipped to them', caption: '📎 Lapel mics clipped to MetroCards' },
    ],
  },
  {
    id: 17,
    layout: 'content',
    title: 'Why It Doesn’t Work',
    cards: [
      { icon: '😐', title: 'It’s Not Funny', description: 'The joke is “it’s a banana.” The joke ended at the word banana.' },
      { icon: '🎭', title: 'It’s Not Authentic', description: 'You are pretending to be interviewed. By nobody. In your kitchen.' },
      { icon: '📈', title: 'And Yet It’s Everywhere', description: 'The algorithm loves it, which says more about the algorithm' },
    ],
  },
  {
    id: 18,
    layout: 'content',
    title: 'My Microphone Hot Takes 🔥',
    cards: [
      { icon: '📎', title: 'A Lapel Mic Is Not a Stick Mic', description: 'Do not clip it to an object and wave it around like a stick mic. We HAVE stick mics! Just use the STICK MICS!' },
      { icon: '👔', title: 'Lapel Mic → YOUR LAPEL', description: 'It’s in the name. Clip it to YOUR LAPEL. Not a banana. Not a hairbrush. Not a MetroCard.' },
      { icon: '🎭', title: 'Props Are Not Authentic', description: 'If you don’t need a microphone, don’t hold a pretend one' },
      { icon: '🎯', title: 'Just Get a Shotgun Mic', description: 'Almost always better than whatever content creators are trying to use' },
    ],
  },
  {
    id: 19,
    layout: 'image',
    title: 'Behold: The Shotgun Mic 🎯',
    images: [
      { url: img('shotgun-mic-on-camera.webp'), alt: 'Camera operator with a shotgun microphone mounted on top of the camera', caption: 'Mounted on the camera. Pointed at the subject. Nobody has to hold a plushie.' },
    ],
  },
  {
    id: 20,
    layout: 'content',
    title: 'Meanwhile, in Actual Cinema',
    emoji: '🎬',
    bullets: [
      'Film crews have spent a century hiding microphones',
      'Boom operators hold a pole over their head for 12 hours a day so you never see it',
      'A mic dipping into the shot is a mistake. People get yelled at.',
      'Content creators: “What if the mic was the whole personality, and also it was fruit?”',
    ],
    takeaway: 'Boom operators have the strongest arms in Hollywood. Respect the boom operators.',
  },

  // ─── EXHIBIT C: LIGHTNING ROUND ──────────────────────
  {
    id: 21,
    layout: 'section',
    title: 'Exhibit C: Lightning Round',
    subtitle: 'Additional crimes, rapid-fire, no further questions',
    sectionNumber: '03',
  },
  {
    id: 22,
    layout: 'content',
    title: 'Other Crimes Against Cinema',
    cards: [
      { icon: '🚗', title: 'The Parked Car Studio', description: 'The world’s most expensive sound booth. Has cupholders.' },
      { icon: '😱', title: 'The Thumbnail Face', description: 'Mouth open, hands on cheeks, red arrow pointing at nothing' },
      { icon: '🟨', title: 'Karaoke Subtitles', description: 'Every. Single. Word. Bouncing. In. Yellow.' },
      { icon: '🚶', title: 'The Arm’s-Length Walk', description: 'Narrating your life to a phone while strangers walk around you' },
      { icon: '⏳', title: '“Wait For It…”', description: 'You waited. Nothing happened. Except you are 4 seconds older.' },
      { icon: '🔁', title: 'The Same Song', description: 'Somehow every video uses the same 6 seconds of the same song' },
    ],
  },

  // ─── THE VERDICT ─────────────────────────────────────
  {
    id: 23,
    layout: 'section',
    title: 'The Verdict',
    subtitle: 'The court has reached a decision',
    sectionNumber: '04',
  },
  {
    id: 24,
    layout: 'content',
    title: 'Is Cinema Ruined?',
    emoji: '⚖️',
    bullets: [
      'Ring lights: GUILTY of crimes against lighting',
      'Prop microphones: GUILTY of crimes against comedy',
      'Parked cars: GUILTY of loitering',
      'Cinema itself: honestly fine. It survived 3D glasses. It will survive this.',
    ],
  },
  {
    id: 25,
    layout: 'content',
    title: 'What Have I Ruined For You?',
    cards: [
      { icon: '🔍', title: 'Check the Eyes', description: 'You will now not be able to unsee the donuts. Feel free to curse my name for each and every sin you see going forward.' },
      { icon: '📱', title: 'TikTok, Too', description: 'Next time you’re doom scrolling, you’ll be counting donuts and spotting prop mics instead of watching the video. Enjoy your scroll.' },
    ],
  },
  {
    id: 26,
    layout: 'title',
    title: 'Happy Birthday, Farai! 🎂',
    subtitle: 'May your lighting be soft and your microphones be real',
    presenter: 'Thank you. No questions, please. I have a banana to eat.',
    presenterTitle: 'P.S. Don’t forget to like, comment, subscribe, and smash that bell.',
    footerIcons: ['👍', '💬', '🔔'],
  },
];
