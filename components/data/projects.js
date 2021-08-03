// {
//   title: ``,
//   localSlug: '',
//   team: ['solo', 'Sole developer'],
//   imageURLs: [
//     '___0.jpg',
//   ],
//   projectLink: '',
//   teaser: ``,
//   subTitle: ``,
//   technologies: ['javascript'],
//   videoURL: null,
//   description: ``,
//   description2: null,
// },

const projects = [
  {
    title: 'Viditia',
    localSlug: 'viditia',
    team: ['group', 'Team of four developers'],
    imageURLs: [
      'viditia0.jpg',
      'viditia1.jpg',
      'viditia2.jpg',
      'viditia3.jpg',
      'viditia4.jpg',
      'viditia5.jpg',
      'viditia6.jpg',
      'viditia7.jpg',
    ],
    projectLink: 'https://viditia-cf976.web.app/',
    teaser:
      'A web application where users can participate, visualize and interact with data from polls in a fun and clever way.',
    subTitle:
      'Viditia is a web application where users can participate, visualize and interact with data from polls in a fun and clever way.',
    technologies: [
      'react',
      'redux',
      'd3',
      'mui',
      'firebase',
      'node',
      'webpack',
      'babel',
    ],
    videoURL: 'https://www.youtube.com/embed/zXWWoYZqnwo',
    description:
      'Viditia was built off of industry standard technologies: D3.js, Firebase, React, Redux, Material UI, Node, Express, HTML5 & CSS. Firebase allowed for reliable implementation of OAuth and back-end services. Our NoSQL Firebase data base schema design was the backbone of Viditia, and crucial to get right. Our team went through several iterations of the design before we landed on the final production version. Once our schema was finalized, we were able to implement realtime voting/ updates to all of our D3 visualizations. D3 also allowed us to create highly customizable graphs in a wide range of styles.',
    description2: null,
  },
  {
    title: 'Pasta Friends',
    localSlug: 'pastafriends',
    team: ['solo', 'Sole developer'],
    imageURLs: [
      'pastafriends0.jpg',
      'pastafriends1.jpg',
      'pastafriends2.jpg',
      'pastafriends3.jpg',
      'pastafriends4.jpg',
      'pastafriends5.jpg',
      'pastafriends6.jpg',
      'pastafriends7.jpg',
      'pastafriends8.jpg',
      'pastafriends9.jpg',
      'pastafriends10.jpg',
      'pastafriends11.jpg',
      'pastafriends12.jpg',
      'pastafriends13.jpg',
      'pastafriends14.jpg',
      'pastafriends15.jpg',
      'pastafriends16.jpg',
      'pastafriends17.jpg',
      'pastafriends18.jpg',
      'pastafriends19.jpg',
    ],
    projectLink: 'https://pastafriends.herokuapp.com/',
    teaser:
      'A PWA/web application that utilizes the NHL API to deliver stats, live boxscores and more to hockey fans.',
    subTitle:
      'Pasta Friends is a PWA/web application that utilizes the NHL API to deliver stats, live boxscores and more to hockey fans.',
    technologies: [
      'react',
      'reactrouter',
      'pwa',
      'axios',
      'heroku',
      'javascript',
      'css3',
      'git',
    ],
    videoURL: 'https://www.youtube.com/embed/WjHiIO-iXtw',
    description:
      'Inspired by Boston Bruins forwrad David Pastrňák (affectionately known to Bruins fans as "Pasta"), Pasta Friends utilizes the NHL API to deliver player stats, player info, team stats, league standings, live boxscores, scoring play summaries, game day rosters and live "players currently on ice". While the application is Bruins themed and Bruins focused, it allows the user to select any of the 32 NHL teams.',
    description2:
      "Use the virtual remote control to change teams in a fun and unique way. Be sure to try all of the buttons on the virtual remote and you may just find an easter egg! Enjoy Pasta Friends on your desktop, or add it to your phone as a PWA for beautiful full screen mobile styling. The live boxscore and game rosters components allow you to enable auto updates, or use manual updates if you don't want to spoil the score after a certain time.",
  },
  {
    title: 'Bass Station II',
    localSlug: 'bassstation',
    team: ['solo', 'Sole developer'],
    imageURLs: [
      'bassstation0.jpg',
      'bassstation1.jpg',
      'bassstation2.jpg',
      'bassstation3.jpg',
      'bassstation4.jpg',
    ],
    projectLink: 'https://bass-station-ii.web.app/',
    teaser: 'A recreation of the Novation Bass Station II using pure CSS.',
    subTitle:
      'This is a to scale recreation of the Novation Bass Station II using pure CSS.',
    technologies: ['react', 'firebase', 'javascript', 'css3', 'git', 'github'],
    videoURL: null,
    description: `The first step in creating this photorealistic and to-scale version of the Bass Station II in react / pure CSS was to measure every tiny feature on the synth in millimeters. Careful attention to detail was taken in recreating subtleties such as: the light/shadows on the knobs, faders, buttons and switches, 3D shadow effects when keys or buttons are pushed, individual rubber grip lines on the knobs, unlit number ghosts on the patch screen and many more.`,
    description2: `Most of the physical UI features have also been recreated. Users can press keys, press buttons, switch switches, twist knobs, slide faders, push mod/pitch wheels, change patches, alter patches, save patches and more. In addition to the challenge of creating photorealistic details in CSS, this project provided several other fun challenges like: Optimizing the data flow to load patches, switch patches, alter patches, and save patches efficiently, and getting the moving parts of the synth to feel natural and fluid.`,
  },
  {
    title: 'Space Quiz',
    localSlug: 'spacequiz',
    team: ['solo', 'Sole developer'],
    imageURLs: [
      'spacequiz0.jpg',
      'spacequiz1.jpg',
      'spacequiz2.jpg',
      'spacequiz3.jpg',
      'spacequiz4.jpg',
      'spacequiz5.jpg',
      'spacequiz6.jpg',
      'spacequiz7.jpg',
      'spacequiz8.jpg',
      'spacequiz9.jpg',
      'spacequiz10.jpg',
      'spacequiz11.jpg',
      'spacequiz12.jpg',
      'spacequiz13.jpg',
      'spacequiz14.jpg',
      'spacequiz15.jpg',
    ],
    projectLink: 'https://space--quiz.herokuapp.com/',
    teaser:
      'A challenging 50-question space quiz with a scale model solar system and a slick UI.',
    subTitle:
      'Space Quiz is a challenging 50-question space quiz featuring a scale model solar system and a slick UI.',
    technologies: ['react', 'heroku', 'javascript', 'css3', 'git', 'github'],
    videoURL: 'https://www.youtube.com/embed/KlK5NUQxLjM',
    description: `The goal of Space Quiz was to deliver an experience far more captivating than your typical Sprocle quiz. Before you even begin the quiz, you are greeted by a beautiful scale model solar system. Click on a planet to learn more about about it, or click on the orbital rings button in the top right corner to toggle orbital rings on and off. Planets feature CSS generated shadows that stay true to the center of the sun regardless of the planet's orbital or rotational position.`,
    description2: `The color palette and component grow/shrink animations were inspired by the Star Wars opening credits in order to give the user a feeling of subliminal nostalgia. Extra touches were added such as the meteor that will occasionally bass behind the title, as well as the comet that smashes through the title on 'begin' or 'resume'. Half way through the quiz and need to run? Local storage will automatically save your place and allow you to resume right where you left off.`,
  },
  {
    title: `ClickUp Figma`,
    localSlug: 'clickupfigma',
    team: ['solo', 'Sole developer'],
    imageURLs: [
      'clickupfigma0.jpg',
      'clickupfigma1.jpg',
      'clickupfigma2.jpg',
      'clickupfigma3.jpg',
      'clickupfigma4.jpg',
      'clickupfigma5.jpg',
      'clickupfigma6.jpg',
      'clickupfigma7.jpg',
      'clickupfigma8.jpg',
      'clickupfigma9.jpg',
      'clickupfigma10.jpg',
      'clickupfigma11.jpg',
      'clickupfigma12.jpg',
      'clickupfigma13.jpg',
    ],
    projectLink: 'https://github.com/dereklouis/clickup-figma',
    teaser: `A responsive web page developed from a static figma with pixel perfect accuracy.`,
    subTitle: `A responsive web page developed from a static figma with pixel perfect accuracy. using only vanilla HTML & CSS.`,
    technologies: ['html5', 'css3', 'webpack'],
    videoURL: null,
    description: `In addition to turning a static figma design into a responsive web page with pixel perfect accuracy, this project uses no additional dependencies or styling libraries beyond vanilla HTML & CSS. The design is responsive down to 320px viewport width (iPhone 5).`,
    description2: null,
  },
  {
    title: `reUnion`,
    localSlug: 'reunion',
    team: ['group', 'Team of seven developers'],
    imageURLs: ['reunion0.jpg'],
    projectLink: 'https://myreunionapp.herokuapp.com/',
    teaser: `A full stack application that manages events, activities, guest lists and more.`,
    subTitle: `Info coming soon...`,
    technologies: [
      'react',
      'redux',
      'reactrouter',
      'node',
      'express',
      'postgresql',
      'sequelize',
      'webpack',
    ],
    videoURL: null,
    description: `Info coming soon...`,
    description2: null,
  },
  {
    title: 'Grace Chopper',
    localSlug: 'gracechopper',
    team: ['group', 'Team of four developers'],
    imageURLs: [
      'gracechopper0.jpg',
      'gracechopper1.jpg',
      'gracechopper2.jpg',
      'gracechopper3.jpg',
      'gracechopper4.jpg',
      'gracechopper5.jpg',
    ],
    projectLink: 'https://gracechopper.herokuapp.com/',
    teaser:
      'An eCommerce store featuring guest & user accounts, OAuth, admin privileges, product filters and more.',
    subTitle:
      'Grace Chopper is An eCommerce store featuring guest & user accounts, OAuth, admin privileges, product filters and more.',
    technologies: [
      'react',
      'redux',
      'reactrouter',
      'node',
      'postgresql',
      'sequelize',
      'webpack',
      'babel',
    ],
    videoURL: 'https://www.youtube.com/embed/7SPtPSlAM6A',
    description: `In the market for a fictitious motorcycle? Grace Chopper makes shopping easy by incorporating many of today's most popular features. Product, customer, and order information is stored in our SQL database via Node, PostgreSQL and Sequelize. User sessions persist through express-session, while guest sessions utilize local storage for persistence. Want user features like past order history and autofill on checkout, but don't feel like making an account? Just log in with Google via Passport.js OAuth.`,
    description2:
      'With the additions of product filters for customers, and admin privileges for easy site maintenance, Grace Chopper is just a simple stripe integration (and a couple dozen real life motorcycles) away from making actual sales.',
  },
  {
    title: 'Game Night',
    localSlug: 'gamenight',
    team: ['solo', 'Sole developer'],
    imageURLs: [
      'gamenight0.jpg',
      'gamenight1.jpg',
      'gamenight2.jpg',
      'gamenight3.jpg',
      'gamenight4.jpg',
      'gamenight5.jpg',
    ],
    projectLink: 'https://game--night.herokuapp.com',
    teaser:
      'A virtual game night management app utilizing socket.io for realtime database updates.',
    subTitle:
      'Game Night is a virtual game night management application that makes hosting game nights quick and easy for everyone.',
    technologies: [
      'postgresql',
      'sequelize',
      'express',
      'socketio',
      'react',
      'reactrouter',
      'axios',
      'heroku',
    ],
    videoURL: 'https://www.youtube.com/embed/xUTlEjmI1WI',
    description:
      'No need to make an account, just enter your name one time and Game Night will remember you thanks to local storage. Once you confirm that you will be attending the game night, you will be assigned a randomized dog avatar and placed in the waiting room. Watch as other players file into the waiting room and fill up the chairs one by one, until the host opens the room. Once in the game room, players have access to the zoom link, any room codes, and three votes to vote for their games of choice. Game night will award 1st, 2nd and 3rd place medals to the games with the highest respective vote counts.',
    description2:
      'What if you (the usual host) is away and somebody else needs to take over hosting duties? Game Night makes access to the Admin Panel easy by utilizing a secret key combination to render it, rather than giving certain accounts admin privieges. Game Night utilizes socket.io to ensure that every update to the database is emitted to every connected player in real time.',
  },
  {
    title: 'Window',
    localSlug: 'window',
    team: ['solo', 'Sole developer'],
    imageURLs: [
      'window0.jpg',
      'window1.jpg',
      'window2.jpg',
      'window3.jpg',
      'window4.jpg',
      'window5.jpg',
    ],
    projectLink: 'https://github.com/dereklouis/window',
    teaser:
      'A chrome extension that visually renders the current weather conditions in your city.',
    subTitle:
      'Window is a chrome extension that animates the current weather conditions in your city. No words, no numbers, your own virtual window to the outside world.',
    technologies: [
      'chrome-extension',
      'axios',
      'webpack',
      'javascript',
      'css3',
      'html5',
      'git',
    ],
    videoURL: 'https://www.youtube.com/embed/V3NOdydimPk',
    description:
      'Using Axios, Window transforms a GET request to OpenWeatherMap API, into a multi-layered visual rendering. Launch window, and pick your city. Boston, Chicago, Los Angeles, or New York City will render matching skylines, however, any city can be launched with a generic skyline. Once you luanch your city, Window takes the UNIX time for sunrise, sunset, and the moment the code executes, to position the sun on one of 130 possible locations along a progress arc. Once, the sun position has been determined, all other major weather conditions such as day/night, clouds, rain and snow are set.',
    description2:
      'City selections on Window will persist between sessions thanks to local storage. Want to watch the sunset through your virtual window? Just leave Window open, and it will update once every 60 seconds.',
  },
  {
    title: `Elevator`,
    localSlug: 'elevator',
    team: ['solo', 'Sole developer'],
    imageURLs: [
      'elevator0.jpg',
      'elevator1.jpg',
      'elevator2.jpg',
      'elevator3.jpg',
      'elevator4.jpg',
    ],
    projectLink: 'https://elevator-game.herokuapp.com/',
    teaser: `A fun game to practice your mouse or finger accuracy.`,
    subTitle: `A fun game to practice your mouse or finger accuracy, utilizing local storage to remember your high scores.`,
    technologies: ['react', 'javascript', 'css3', 'git', 'github', 'heroku'],
    videoURL: null,
    description: `Elevator started off as a practice exercise in using CSS box-shadows to create realistic looking buttons / button pushes. After making a few rows of realistic looking elevator buttons, I decided to turn this little practice exercise into a functional game.`,
    description2: null,
  },
  {
    title: 'D3.js Tutorial',
    localSlug: null,
    team: ['solo', 'Sole developer'],
    imageURLs: ['medium0.jpg'],
    projectLink:
      'https://thedereklouis.medium.com/add-an-interactive-chart-to-your-react-app-using-d3-v6-6c79f14a05f5',
    teaser:
      'A Medium article with an accompanying code demo, written to walk you through your first D3 chart',
    subTitle: null,
    technologies: ['react', 'd3'],
    videoURL: null,
    description: null,
    description2: null,
  },
  {
    title: `Dana Kenney`,
    localSlug: 'danakenney',
    team: ['solo', 'Sole developer'],
    imageURLs: ['danakenney0.jpg', 'danakenney1.jpg', 'danakenney2.jpg'],
    projectLink: 'https://danakenney.com',
    teaser: `A fully responsive recreation of the Squarespace 'Degraw' template.`,
    subTitle: `A fully responsive recreation of the Squarespace 'Degraw' template, using no external styling libraries.`,
    technologies: ['react', 'reactrouter', 'css3', 'git', 'github'],
    videoURL: null,
    description: `No external styling libraries were used in this fully responsive recreation of the Squarespace 'Degraw' template. This create-react-app based site was deployed to github pages.`,
    description2: null,
  },
];

export default projects;
