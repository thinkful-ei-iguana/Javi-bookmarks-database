const uuid = require('uuid/v4');

const bookmarks = [
  {
    id: uuid(),
    title: 'Google',
    url: 'https://www.google.com',
    rating: 5,
    description: 'A search engine'
  },
  {
    id: uuid(),
    title: 'Yahoo Answers',
    url: 'https://www.answers.yahoo.com',
    rating: 3,
    description: 'A source of entertainment but not advice',
  },
  {
    id: uuid(),
    title: 'Twitter',
    url: 'https://www.twitter.com',
    rating: 4
  },
  {
    id: uuid(),
    title: 'Reddit',
    url: 'https://www.reddit.com',
    rating: 5
  }
];

module.exports = { bookmarks }