import express from 'express';
import Quote from '../models/Quote.js';

const router = express.Router();
console.log('Quote routes loaded...');


router.get('/', async (req, res) => {
    const quotes = await Quote.find();
    res.json(quotes);
});


router.get('/random', async (req, res) => {
    console.log('Fetching random quote...');
    const count = await Quote.countDocuments();
    const random = Math.floor(Math.random() * count);
    const quote = await Quote.findOne().skip(random);
    res.json(quote);
});


router.get('/:author', async (req, res) => {
    const author = req.params.author;
    const quotes = await Quote.find({ author: new RegExp(author, 'i') });
    res.json(quotes);
});

export default router;
