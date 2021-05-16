const { Post } = require('../models');

const postdata = [
  {
    title: 'afdasdadfasdf',
    content: 'Hello world!',
    user_id: 10
  },
  {
    title: 'afdasdfasdfad',
    user_id: 8
  },
  {
    title: 'afdafasdfadsf.',
    user_id: 1
  },
  {
    title: 'adsfads.',
    user_id: 4
  },
  {
    title: 'adfafa.',
    user_id: 7
  },
  {
    title: 'adfafasd',
    user_id: 4
  },
  {
    title: 'Iaadfasd',
    user_id: 1
  },
  {
    title: 'adsfasdfa.',
    user_id: 1
  },
  {
    title: 'adfasfasd.',
    user_id: 9
  },
  {
    title: 'adsfasdf',
    user_id: 5
  },
  {
    title: 'asdfasdfa.',
    user_id: 3
  },
  {
    title: 'adfasfa.',
    user_id: 10
  },
  {
    title: 'adfasdf.',
    user_id: 8
  },
  {
    title: 'adfasdf.',
    user_id: 3
  },
  {
    title: 'adfasfa.',
    user_id: 3
  },
  {
    title:
      'asdfasdfasdfasdfasdfasdfas.',
    user_id: 7
  },
  {
    title: 'adsfasdasdfs.',
    user_id: 6
  },
  {
    title: 'asdfsafasdf.',
    user_id: 4
  },
  {
    title: 'Nadsfasfasdf.',
    user_id: 6
  },
  {
    title: 'Iasdfasdfasdfasdfasdfe.',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
