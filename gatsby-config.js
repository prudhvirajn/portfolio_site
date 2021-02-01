module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'Prudhviraj Naidu',
    // Main Site Title
    title: `Prudhviraj Naidu | Computer Science Student`,
    // Description that goes under your name in main bio
    description: ` B.S Computer Science Senior @ University of Cincinnati`,
    // Optional: Github account URL
    github: `https://github.com/prudhvirajn`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/prudhvirajn/`,
    // Optional: LinkedIn account URL
    resume: `https://drive.google.com/file/d/1dxofSEH8DdPLBBaOvOZWEPkEr2-nK1I3/view?usp=sharing`,
    // Content of the About Me section
    about: `Hi! I am a senior B.S Computer Science student enthusiastic about Computer Vision and Machine Learning. Looking for internships in summer 2021.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: '86 Café',
        description: 'Volunteered as a café assistant, August 2018 - December 2018',
        line2: '',
        link: '',
      },
      {
        name: 'Hyperloop UC',
        description: 'Software Team Lead, August 2017 - February 2018',
        line2: 'Software Team Member, September 2016 - August 2017',
        link: '',
      },
      {
        name: 'UC Relay for Life',
        description: 'Member of Organizing Committee, Janruary 2017 - April 2017',
        line2: '',
        link: '',
      },
      {
        name: 'UC Calculus II Competition',
        description: 'Winner 2nd place, April 2017',
        line2: '',
        link: '',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Dept of Engineering Education, University of Cincinnati',
        description: 'Part Time Peer TA, Janurary 2021 - Present',
        line2: '',
        link: '',
      },
      {
        name: 'Omniaz',
        description: 'Machine Learning Engineer, August 2019 - April 2020',
        line2: 'Artificial Intelligence Intern, Janruary 2019 - April 2019',
        link: '',
      },
      {
        name: 'Learning Commons, University of Cincinnati',
        description: 'Part Time Peer Tutor, Janruary 2019 - April 2019',
        line2: '',
        link: '',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Python, OpenCV, Tensorflow, NumPy',
      },
      {
        name: 'Other',
        description:
          'Computer Vision, Machine Learning, Deep Learning, Multi Threading, Documentation',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
