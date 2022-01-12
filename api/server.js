const express = require('express');
const cors = require('cors');
const server = express();
server.use(cors());
server.use(express.json());

const postsRoutes = require('./routes/posts')

server.use('/posts', postsRoutes)
server.length('/', (req, res) => res.send('Welcome'))
module.exports = server