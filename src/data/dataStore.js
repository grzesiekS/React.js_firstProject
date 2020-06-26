export const settings = {
  columnCreatorText: 'Add new column',
  cardCreatorText: 'Add new card',
  creator: {
    buttonOK: 'OK',
    buttonCancel: 'Cancel',
    defaultText: 'Add new item',
  },
  search: {
    defaultText: 'Search...',
    icon: 'search',
  },
  defaultListDescription: '<p>I can do all the things!!!</p>',
  defaultColumnIcon: 'list-alt',
  headerIcon: 'fas fa-bug',
};

export const pageContents = {
  title: 'My first React app',
  subtitle: 'A simple to-do app, with lists, columns and cards',
};

export const listData = {
  title: 'Things to do <sup>soon!</sup>',
  description: 'Interesting things I want to check out!',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  columns: [
    {
      key: 0,
      title: 'Books',
      icon: 'book',
      cards: [
        {
          key: 0,
          title: 'This Is Going to Hurt',
        },
        {
          key: 1,
          title: 'Interpreter of Maladies',
        },
      ],
    },
    {
      key: 1,
      title: 'Movies',
      icon: 'film',
      cards: [
        {
          key: 0,
          title: 'Harry Potter',
        },
        {
          key: 1,
          title: 'Star Wars',
        },
      ],
    },
    {
      key: 2,
      title: 'Games',
      icon: 'gamepad',
      cards: [
        {
          key: 0,
          title: 'The Witcher',
        },
        {
          key: 1,
          title: 'Skyrim',
        },
      ],
    },
  ],
};

const lists = [
  {
    id: 'list-1',
    title: 'Things to do <sup>soon!</sup>',
    description: 'Interesting things I want to check out!',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
  {
    id: 'list-2',
    title: 'Things to buy <sup>soon!</sup>',
    description: 'Interesting things I want to buy!',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
  {
    id: 'list-3',
    title: 'Things to learn <sup>soon!</sup>',
    description: 'Interesting things I want to learn!',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
];

const columns = [
  {
    id: 'column-1',
    listId: 'list-1',
    title: 'Books',
    icon: 'book',
  },
  {
    id: 'column-2',
    listId: 'list-1',
    title: 'Movies',
    icon: 'film',
  },
  {
    id: 'column-3',
    listId: 'list-1',
    title: 'Games',
    icon: 'gamepad',
  },
  {
    id: 'column-4',
    listId: 'list-2',
    title: 'Strange column',
    icon: 'question',
  },
];

const cards = [
  {
    id: 'card-1',
    index: 0,
    columnId: 'column-1',
    title: 'This Is Going to Hurt',
  },
  {
    id: 'card-2',
    index: 1,
    columnId: 'column-1',
    title: 'Interpreter of Maladies',
  },
  {
    id: 'card-3',
    index: 0,
    columnId: 'column-2',
    title: 'Harry Potter',
  },
  {
    id: 'card-4',
    index: 1,
    columnId: 'column-2',
    title: 'Star Wars',
  },
  {
    id: 'card-5',
    index: 0,
    columnId: 'column-3',
    title: 'The Witcher',
  },
  {
    id: 'card-6',
    index: 1,
    columnId: 'column-3',
    title: 'Skyrim',
  },
];

export const infoContent = {
  title: 'info',
  subtitle: 'Information about react website',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
};

export const faqContent = {
  title: 'faq',
  subtitle: 'Frequently Asked Question',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  qaa: [
    {
      key: 0,
      question: 'question1',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis nisl feugiat, tempus nunc eget, scelerisque massa. In nunc libero, pretium id magna et, tristique convallis turpis. Maecenas eleifend, magna quis scelerisque varius, eros est elementum lectus, at viverra est leo tempus tortor.',
    },
    { 
      key: 1,
      question: 'question2',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis nisl feugiat, tempus nunc eget, scelerisque massa. In nunc libero, pretium id magna et, tristique convallis turpis. Maecenas eleifend, magna quis scelerisque varius, eros est elementum lectus, at viverra est leo tempus tortor.',
    },
    { 
      key: 2,
      question: 'question3',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis nisl feugiat, tempus nunc eget, scelerisque massa. In nunc libero, pretium id magna et, tristique convallis turpis. Maecenas eleifend, magna quis scelerisque varius, eros est elementum lectus, at viverra est leo tempus tortor.',
    }, 
  ],
};

export const navLinks = {
  home: {
    name: 'Home',
    href: '/',
  },
  info: {
    name: 'Info',
    href: '/info',
  },
  faq: {
    name: 'FAQ',
    href: '/faq',
  },
};

const initialStoreData = {
  app: {...pageContents},
  lists: [...lists],
  columns: [...columns],
  cards: [...cards],
  info: {...infoContent},
};

export default initialStoreData;
