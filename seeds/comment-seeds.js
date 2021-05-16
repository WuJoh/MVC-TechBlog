const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'asdfasdfasdf.',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'asdfasdfasdfa fasdfasdfasdf asdfasdfasdf aaad fasdfs.',
    user_id: 6,
    post_id: 8
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
