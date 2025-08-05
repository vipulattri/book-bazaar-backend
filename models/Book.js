import mongoose from 'mongoose';
import { type } from 'os';

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
  condition: { type: String, required: true },
  price: { type: Number, required: true },
  subject :{type: String, required: false},
  address:{type: String, required : false},
  name :{type:String , required : false},
  image: { type: String, required :false }, // optional image URL
  phone:{type :String ,required :false},
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
