import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import booksRoutes from './routes/booksRoutes.js'

const PORT = process.env.PORT || 5501;

const app = express();

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});

app.use('/books', booksRoutes);

app.use((req, res) => {
  res.status(404).send({ error: `Your requested route does not exist.` });
});