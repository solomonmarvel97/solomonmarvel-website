/** About Marv Solomon: story beats for /about. First person on-page. */
export const aboutStory = {
  pageTitle: 'About Marv Solomon',
  intro:
    'I go by Marv Magic. Officially Marvelous Solomon Akporowho. This is the short version of the arc: where I started, what I have built, what I learned the hard way, what I am building now, and where I am pointed.',
  sections: [
    {
      id: 'started',
      title: 'Where I started',
      body: [
        'Delta State, Nigeria. Coding from age 8: BASIC, Visual Basic 6, scripting, then Turbo Pascal, C#, Qt, and C++ because I wanted machines to do what I could already see in my head. Computer Science at 14. Graduated at 19.',
        'At 17 I shipped PingXtra, a campus social network. That was the first time strangers used something I built. I never went back to building only for the grade.',
      ],
    },
    {
      id: 'built',
      title: 'What I have built',
      body: [
        'Boltcliq since 2014: agency, consulting, and the companies under that umbrella. JobBox: AI-native recruitment that screens, scores, and explains fit in minutes. PeerPay as CTO. GxPay as principal architect. Luvie, MindStark, Top Universe, and earlier products across education, community, and logistics.',
        'The receipts I will stand on: 20k+ people trained, 150+ engineers led, $200k+ of my own capital in the companies I run. The work is production systems in banking, payments, hiring, and learning. Not demos that look clever and die in a deck.',
      ],
    },
    {
      id: 'learned',
      title: 'What I learned',
      body: [
        'Most companies do not have an AI problem. They have a vertical integration problem. A generic copilot sits beside the business. The systems that move a P&L live inside one industry workflow and stay there long enough to change volume, cost, and speed.',
        'Curiosity is how I stay useful. I learn because the rooms I work in punish people who only know the slide version of the stack: credit, hiring, tutoring, payouts.',
      ],
    },
    {
      id: 'now',
      title: 'What I am building now',
      body: [
        'Solution design and vertical AI integration for operators in fintech, banking, recruitment, and education. Production systems. Not wrappers.',
        'That is JobBox, Boltcliq, PeerPay, advisory at Luvie, consulting at GxPay, and a short list of engagements for founders ready to put intelligence inside the operation instead of next to it.',
      ],
    },
    {
      id: 'going',
      title: 'Where I am going',
      body: [
        'Same bet, louder: industry-specific systems in production, operators who can grow without matching headcount to volume, and public work that shows how that actually gets built.',
        'Books are coming. Podcasts and interviews will sit on this site when they exist. I will not invent a media shelf to look busy. When the work is real, it will be here.',
      ],
    },
  ],
} as const
