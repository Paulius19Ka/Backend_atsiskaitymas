import { Router } from "express";

import { getAllBooks, getSpecificBook } from "../controllers/booksController.js"

const router = Router();

router.get('', getAllBooks);
router.get('/:id', getSpecificBook);

export default router;