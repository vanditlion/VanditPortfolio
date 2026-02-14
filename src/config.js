module.exports = {
  siteTitle: 'Vandit U Shah',
  siteDescription:
    'Vandit U Shah is an AI/ML Engineer focused on NLP, generative AI, and scalable data pipelines.',
  siteKeywords:
    'Vandit U Shah, Vandit, AI/ML Engineer, machine learning, NLP, generative AI, MLOps, Python, SQL, Spark, Kubernetes, AWS, Azure, GCP',
  siteUrl: 'https://vanditlion.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Vandit U Shah',
  location: 'USA',
  email: 'Vandit684@gmail.com',
  github: 'https://github.com/vanditlion',
  twitterHandle: '@',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/vanditlion',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/vandit-shah-717aa31b9?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    },
  ],

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
