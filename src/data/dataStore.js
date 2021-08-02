export const settings = {
  columnCreatorText: "Add new column",
  cardCreatorText: "Add new card",
  creator: {
    buttonOK: "OK",
    buttonCancel: "Cancel",
    defaultText: "Add new item",
  },
  search: {
    defaultText: "Search...",
    icon: "search",
  },
  header: {
    icon: "cat",
  },
  defaultListDescription: "<p>I can do all the things!!!</p>",
  defaultColumnIcon: "list-alt",
};

export const faq = {
  title: "FAG",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus nulla nihil quidem explicabo debitis unde amet eos magni mollitia error, quibusdam nobis animi aliquid quasi enim sequi reprehenderit velit voluptates dolorum porro autem consequatur! Doloremque eius numquam enim aperiam provident ad iste, possimus eaque, illo, nam error facilis beatae neque?",
  image:
    "https://images.pexels.com/photos/1205301/pexels-photo-1205301.jpeg?cs=srgb&dl=pexels-felix-mittermeier-1205301.jpg&fm=jpg",
};

export const info = {
  title: "Info",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus nulla nihil quidem explicabo debitis unde amet eos magni mollitia error, quibusdam nobis animi aliquid quasi enim sequi reprehenderit velit voluptates dolorum porro autem consequatur! Doloremque eius numquam enim aperiam provident ad iste, possimus eaque, illo, nam error facilis beatae neque?",
  image:
    "https://images.pexels.com/photos/7568783/pexels-photo-7568783.jpeg?cs=srgb&dl=pexels-csaba-zelch-7568783.jpg&fm=jpg",
};

export const pageContents = {
  title: "My first React app",
  subtitle: "A simple to-do app, with lists, columns and cards",
};

export const listData = {
  title: "Things to do <sup>soon!</sup>",
  description: "Interesting things I want to check out!",
  image: "http://uploads.kodilla.com/bootcamp/fer/11.react/space.png",
  columns: [
    {
      key: 0,
      title: "Books",
      icon: "book",
      cards: [
        {
          key: 0,
          title: "This Is Going to Hurt",
        },
        {
          key: 1,
          title: "Interpreter of Maladies",
        },
      ],
    },
    {
      key: 1,
      title: "Movies",
      icon: "film",
      cards: [
        {
          key: 0,
          title: "Harry Potter",
        },
        {
          key: 1,
          title: "Star Wars",
        },
      ],
    },
    {
      key: 2,
      title: "Games",
      icon: "gamepad",
      cards: [
        {
          key: 0,
          title: "The Witcher",
        },
        {
          key: 1,
          title: "Skyrim",
        },
      ],
    },
  ],
};

const lists = [
  {
    id: "list-1",
    title: "Things to do <sup>soon!</sup>",
    description: "Interesting things I want to check out!",
    image: "http://uploads.kodilla.com/bootcamp/fer/11.react/space.png",
  },
];

const columns = [
  {
    id: "column-1",
    listId: "list-1",
    title: "Books",
    icon: "book",
  },
  {
    id: "column-2",
    listId: "list-1",
    title: "Movies",
    icon: "film",
  },
  {
    id: "column-3",
    listId: "list-1",
    title: "Games",
    icon: "gamepad",
  },
  {
    id: "column-4",
    listId: "list-2",
    title: "Strange column",
    icon: "question",
  },
];

const cards = [
  {
    id: "card-1",
    columnId: "column-1",
    title: "This Is Going to Hurt",
  },
  {
    id: "card-2",
    columnId: "column-1",
    title: "Interpreter of Maladies",
  },
  {
    id: "card-3",
    columnId: "column-2",
    title: "Harry Potter",
  },
  {
    id: "card-4",
    columnId: "column-2",
    title: "Star Wars",
  },
  {
    id: "card-5",
    columnId: "column-3",
    title: "The Witcher",
  },
  {
    id: "card-6",
    columnId: "column-3",
    title: "Skyrim",
  },
];

const initialStoreData = {
  app: { ...pageContents },
  lists: [...lists],
  columns: [...columns],
  cards: [...cards],
};

export default initialStoreData;
