const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'johnnywu',
    email: 'johnny.wu@tech.ca',
    password: 'password123'
  },
  {
    username: 'mason',
    email: 'mason@tech.ca',
    password: 'password123'
  },
  {
    username: 'joan',
    email: 'joan@tech.ca',
    password: 'password123'
  },
  {
    username: 'ginger',
    email: 'ginger@tech.ca',
    password: 'password123'
  },
  {
    username: 'friedchicken',
    email: 'friedchicken@tech.ca',
    password: 'password123'
  },
  {
    username: 'orangejuice',
    email: 'tropicana@tech.ca',
    password: 'password123'
  },
  {
    username: 'amazingspiderman',
    email: 'spiderman@tech.ca',
    password: 'password123'
  },
  {
    username: 'hulksmash',
    email: 'bruce.banner@tech.ca',
    password: 'password123'
  },
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
