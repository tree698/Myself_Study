import express from 'express';
import { body, param, validationResult } from 'express-validator';

const app = express();
app.use(express.json());

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return res.status(400).json({ message: errors.array()[0].msg });
};

app.post(
  '/users',
  [
    body('name').isLength({ min: 2 }).withMessage('두 글자 이상'),
    body('age').isInt().withMessage('숫자 입력'),
    body('job.name').notEmpty().withMessage('반드시 기입'),
    body('email').isEmail().withMessage('이메일 기입'),
    validate,
  ],
  (req, res, next) => {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ message: errors.array() });
    // }
    console.log(req.body);
    res.sendStatus(201);
  }
);

app.get(
  '/:email',
  [param('email').isEmail().withMessage('형식에 맞게 입력'), validate],
  (req, res, next) => {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ message: errors.array() });
    // }
    res.send('love');
  }
);

app.listen(8080);
