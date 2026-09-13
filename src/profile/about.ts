export type AboutPhoto = {
  src: string
  alt: string
  caption: string
}

export type AboutSection = {
  id: string
  title: string
  body: string[]
  photos?: AboutPhoto[]
}

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
        'Delta State, Nigeria. Coding from age 8: BASIC, Visual Basic 6, scripting, then Turbo Pascal, C#, Qt, and C++ because I wanted machines to do what I could already see in my head.',
        'I gained admission to study Computer Science at 13 and turned 14 in my first year. Graduated at 19. That early start is still the root of how I work: learn fast, build with my hands, teach what I just figured out.',
      ],
      photos: [
        {
          src: '/profile/story/cs-admission.jpg',
          alt: 'Marv at 13 to 14, around the time of admission into Computer Science',
          caption: 'Just after admission into Computer Science. I was 13, and turned 14 in my first year.',
        },
      ],
    },
    {
      id: 'amtech',
      title: 'Amtech Solutions, 2009 / 2010',
      body: [
        'My first company was Amtech Solutions, built with my elder brother. I was the technical guy: basic websites, training students in Word packages and typing, and keeping the shop running when hardware broke.',
        'The training room is where I taught. Some of those early machines ran on 128MB or 256MB of RAM with 5GB or 20GB hard drives. I built one of the system units myself from parts picked up across different computer shops.',
        'That wooden table was my first work desk. I fixed and built power packs, repaired TVs and DVDs, and started learning to build a drone from electrical parts. One of the people in these photos is an early student from that room.',
      ],
      photos: [
        {
          src: '/profile/story/amtech-shop.jpg',
          alt: 'Amtech Solutions shop front with open doors and service posters',
          caption: 'Amtech Solutions. First company with my brother.',
        },
        {
          src: '/profile/story/amtech-portrait.jpg',
          alt: 'Marv outside Amtech Solutions holding a phone and notebook',
          caption: 'Outside the shop. Technical lead, trainer, and the person answering the phone.',
        },
        {
          src: '/profile/story/amtech-training-room.jpg',
          alt: 'Amtech training room with open PC case, whiteboard, and early computers',
          caption: 'The training room. Open case on the desk is a unit I built from shop-sourced parts.',
        },
        {
          src: '/profile/story/amtech-brother-desk.jpg',
          alt: 'Elder brother at Amtech holding a branded cap beside the first work desk',
          caption: 'My elder brother. That table was my first work desk.',
        },
        {
          src: '/profile/story/amtech-workshop.jpg',
          alt: 'Amtech Solutions workshop with first work desk, tools, and open PC under the table',
          caption: 'The workshop. Same first desk, parts everywhere, system unit under the table.',
        },
        {
          src: '/profile/story/amtech-student.jpg',
          alt: 'Early Amtech student in the workshop with the training room behind',
          caption: 'One of my early students, with the training room behind her.',
        },
      ],
    },
    {
      id: 'pingxtra',
      title: 'Pingxtra Social, 2014 / 2015',
      body: [
        'In school I co-founded Pingxtra Social, my second company. We built a campus social media product with a small team. It was the first time I shipped software meant for a whole campus, not a single client desk.',
        'It did not take off. Money and resources ran out before the product could. That failure still matters: I learned what it costs to ship with a team, and why production systems need more than a good idea.',
      ],
      photos: [
        {
          src: '/profile/story/pingxtra-team.jpg',
          alt: 'Pingxtra Social team group selfie',
          caption: 'Pingxtra Social. The campus team.',
        },
        {
          src: '/profile/story/pingxtra-lab.jpg',
          alt: 'Pingxtra team working in a computer lab',
          caption: 'Building in the lab. Campus product, real users in mind.',
        },
        {
          src: '/profile/story/pingxtra-shirts.jpg',
          alt: 'Pingxtra Social founders in branded black shirts',
          caption: 'The Pingxtra shirts. Second company, still in school.',
        },
      ],
    },
    {
      id: 'built',
      title: 'What I have built',
      body: [
        'Boltcliq since 2014: a software development agency that also does consulting and outsourcing. JobBox: an AI-native recruitment workspace for modern teams, and an agentic operating system for recruiters. I have also shipped as principal architect at GxPay, and worked across Luvie, MindStark, Top Universe, and earlier products in education, community, and logistics.',
        'The receipts I will stand on: 20k+ people trained, 150+ engineers led, $200k+ of my own capital in the companies I run. The work is production systems in banking, payments, hiring, and learning. Not demos that look clever and die in a deck.',
      ],
    },
    {
      id: 'learned',
      title: 'What I learned',
      body: [
        'Most companies do not have an AI problem. They have a vertical integration problem. A generic copilot sits beside the business. The systems that move a P&L live inside one industry workflow and stay there long enough to change volume, cost, and speed.',
        'Curiosity is how I stay useful. I learn because the rooms I work in punish people who only know the slide version of the stack: credit, hiring, tutoring, payouts. That habit started at Amtech, on machines that barely had enough RAM to open Word.',
      ],
    },
    {
      id: 'now',
      title: 'What I am building now',
      body: [
        'Solution design and vertical AI integration for operators in fintech, banking, recruitment, and education. Production systems. Not wrappers.',
        'That is JobBox, Boltcliq, advisory at Luvie, consulting at GxPay, and a short list of engagements for founders ready to put intelligence inside the operation instead of next to it.',
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
  ] satisfies AboutSection[],
} as const
