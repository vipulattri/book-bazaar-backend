import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: false, // Changed from true to false
    trim: true 
  },
  author: { 
    type: String, 
    required: false, // Changed from true to false
    trim: true 
  },
  genre: { 
    type: String, 
    required: false,
    trim: true 
  },
  condition: { 
    type: String, 
    required: false,
    trim: true 
  },
  price: { 
    type: Number, 
    required: false,
    default: 0 
  },
  subject: {
    type: String, 
    required: false,
    trim: true
  },
  address: {
    type: String, 
    required: false,
    trim: true
  },
  name: {
    type: String, 
    required: false,
    trim: true
  },
  image: { 
    type: String, 
    required: false,
    trim: true
  },
  phone: {
    type: String,
    required: false,
    trim: true
  },
  email: {
    type: String,
    required: false,
    trim: true,
    lowercase: true
  },
  description: {
    type: String,
    required: false,
    trim: true
  },
  isDonation: {
    type: Boolean,
    default: false,
    required: false
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false,
  },
}, {
  timestamps: true
});

const Book = mongoose.model('Book', bookSchema);
export default Book;
