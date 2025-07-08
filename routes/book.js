import express from 'express';
import { createBook, deleteBook, getBooks, updateBook } from '../controllers/bookController.js';
import { protect } from '../middlewares/authMiddleware.js';
const router = express.Router();

router.get('/', getBooks);
router.post('/', protect, createBook);
router.put('/:id', protect, updateBook);
router.delete('/:id', protect, deleteBook);

export default router;