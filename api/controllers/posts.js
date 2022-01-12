const express = require('express');
const router = express.Router();

const Post = require('../models/posts')

async function index (req, res) {
    try {
        const posts = await Post.all
        res.status(200).json(posts)
    } catch (err) {
        res.status(500).send({err})
    }
}

async function show (req, res) {
    try {
        const post = await Post.findById(req.params.id);
        const author = await post.authors;
        res.status(200).json({ ...post, authors });
    } catch (err) {
        res.status(500).send(err);
    };
}

async function create(req, res) {
    try {
        const post = await Post.create(req.body);
        res.status(201).json(post);
    } catch (err) {
        console.log(err);
        res.status(422).send('Post not created')
    }
}

module.exports = {index, show, create};