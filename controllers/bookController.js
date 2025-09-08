import Book from '../models/Book.js';
import cloudinary from '../utils/cloudinary.js';
import fs from 'fs';

export const getBooks = async (req, res) => {
  try {
    const books = await Book.find().populate('userId', 'username');
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching books', error: error.message });
  }
};

export const createBook = async (req, res) => {
  try {
    let imageUrl = '';

    // Upload to Cloudinary if file exists
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: 'books',
      });
      imageUrl = result.secure_url;

      // Delete local file
      fs.unlinkSync(req.file.path);
    }

    // Just create the book with whatever data is passed
    const book = await Book.create({
      ...req.body,            // all fields from request body
      image: imageUrl || '',  // default to empty string if no image
    });

    res.status(201).json(book);
  } catch (error) {
    console.error('❌ Error in createBook:', error);
    res.status(500).json({
      message: 'Error creating book',
      error: error.message,
      stack: error.stack
    });
  }
};

export const updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: 'Error updating book', error: error.message });
  }
};

export const deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ message: 'Book deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting book', error: error.message });
  }
};
