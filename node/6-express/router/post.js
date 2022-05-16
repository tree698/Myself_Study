import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send('GET: /post');
});

router.post('/', (req, res) => {
  res.status(200).send('POST: /post');
});

router.put('/:id', (req, res) => {
  res.status(200).send('PUT: /post/:id');
});

router.delete('/:id', (req, res) => {
  res.status(200).send('DELETE: /post/:id');
});

export default router;
