module.exports = {
  siteTitle: 'Animesh Pratap Singh | Software Engineer',
  siteDescription:
    'Animesh Singh is a software engineer based in Delhi, India who specializes in building (and occasionally designing) exceptional websites, applications, and everything in between.',
  siteKeywords:
    'Animesh Singh, Animesh, singh, AnimeshRy, software engineer, back-end engineer, web developer, javascript, indian',
  siteUrl: 'https://iamanimesh.tech',
  siteLanguage: 'en_US',
  name: 'Animesh Pratap Singh',
  location: 'Delhi, India',
  email: 'psingh.animesh@gmail.com',
  github: 'https://github.com/AnimeshRy',
  twitterHandle: '@AnimeshRy',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/AnimeshRy',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/AnimeshRy',
    },
    {
      name: 'Blog',
      url: 'https://animeshry.github.io/blog/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/animesh.ry/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/AnimeshRy',
    },
  ],
  lastUpdated: '17-March-2021',

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
