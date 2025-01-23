import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: [true, 'prise must be provided'],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    required: [false, 'rating must be provided'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {
      values: ['apple', 'samsung', 'dell', 'mi'],
      message: `{VALUE} is not supported`,
    },
  },
});

export const Product = mongoose.model('product', productSchema);
