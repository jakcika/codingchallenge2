const express = require('express');
const router = express.Router();

const Author = require('../models/post')

async function index (req, res) {
    try {
        const posts = await Post.all
        res.status(200).json(authors)
    } catch (err) {
        res.status(500).send({err})
    }
}

async function show (req, res) {
    try {
        const post = await Post.findById(req.params.id);
        const comments = await post.comments;
        res.status(200).json({ ...post, comments });
    } catch (err) {
        res.status(500).send(err);
    };
}

module.exports = {index, show};