import mongoose from 'mongoose';

const QuoteSchema = new mongoose.Schema({
    text: String,
    author: String,
});

const Quote = mongoose.model('Quote', QuoteSchema);
export default Quote;
