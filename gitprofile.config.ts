// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Vidhi-0603', // Your GitHub org/user name. (This is the only required config)
  },

  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'URLShortener',
          description:
            ' URL Shortener App built with MERN stack (MongoDB, Express, React, Node.js).⚡ Uses TanStack Query for efficient server state management and caching 🛣️ Implements TanStack Router for smooth, declarative routing in React. 🔐 JWT Authentication for secure user login, signup, and protected routes. ✨ Features: custom short URLs, user-specific link management, and analytics-ready structure.',
          imageUrl:
            'https://github.com/Vidhi-0603/URLShortener/blob/main/Screenshot%202025-08-26%20171548.png',
          link: 'https://github.com/Vidhi-0603/URLShortener',
        },
        {
          title: 'ShopseeApp',
          description:
            'ShopseeApp is a modern e-commerce web application built with Angular and Firebase. It features Firebase Authentication for secure login, Realtime Database for product and cart management, Firebase Auth REST API integration, category-based filtering, wishlist, and shopping cart functionality — offering a seamless online shopping experience.',
          imageUrl:
            'https://github.com/Vidhi-0603/ShopseeApp/blob/master/Screenshot%202025-08-15%20220346.png',
          link: 'https://github.com/Vidhi-0603/ShopseeApp',
        },
        {
          title: 'World Wide Land(WWl)',
          description:
            'World Wide Land is a real estate web application built with Django and SQLite3. It provides property listings, user authentication, and a structured database to manage buyers, sellers, and property details efficiently. The platform enables users to explore real estate options with a reliable and scalable backend powered by Django ORM.',
          imageUrl:
            'https://github.com/Vidhi-0603/wwl/blob/main/Screenshot%202025-08-27%20122526.png',
          link: 'https://github.com/Vidhi-0603/wwl',
        },
      ],
    },
  },
  seo: { title: 'Portfolio of Vidhilika Gupta', description: '', imageURL: '' },
  social: {
    linkedin: 'https://www.linkedin.com/in/vidhilika-gupta-a9a213214/',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'gvidhilika0606@gmail.com',
  },
  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'React.js',
    'Angular',
    'Node.js',
    'Express.js',
    'Java',
    'Python',
    'Django',
    'MySQL',
    'SQLite3',
    'Git',
    'HTML',
    'CSS',
    'BootStrap',
    'Tailwind',
    'Firebase',
    'API Integration',
  ],
  experiences: [],
  educations: [
    {
      institution: 'Babu Banarasi Das University',
      degree: 'MCA',
      from: '2024',
      to: '2026',
    },
    {
      institution: 'Babu Banarasi Das University',
      degree: 'BCA',
      from: '2021',
      to: '2024',
    },
  ],
  publications: [],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    // How many articles to display. Max is 10.
  },
  //google Analytics Id
  googleAnalytics: {
    id: 'G-BJH1X2DLJ3', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'emerald',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
