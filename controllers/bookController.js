import Book from '../models/Book.js';

export const getBooks = async (req, res) => {
  const books = await Book.find().populate('userId', 'username');
  res.json(books);
};

export const createBook = async (req, res) => {
  const book = await Book.create({ ...req.body, userId: req.user.id });
  res.status(201).json(book);
};

export const updateBook = async (req, res) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(book);
};

export const deleteBook = async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ message: 'Book deleted' });
};


// server/controllers/messageController.js
import Message from '../models/Message.js';

export const sendMessage = async (req, res) => {
  const { receiverId, text, conversationId } = req.body;
  const message = await Message.create({ senderId: req.user.id, receiverId, text, conversationId });
  res.status(201).json(message);
};

export const getMessages = async (req, res) => {
  const messages = await Message.find({ conversationId: req.params.conversationId });
  res.json(messages);
};

