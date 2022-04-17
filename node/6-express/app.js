import express, { application } from 'express';

const app = express();
app.get('/sky/:id', (req, res, next) => {
  // console.log(req.path);
  // console.log(req.headers);
  console.log(req.params);
  console.log(req.params.id);
  console.log(req.query);
  console.log(req.query.keyword);

  res.setHeader('key', 'value');
  // res.send('hi');
  // res.json({name:"ellie"});
  // res.sendStatus(400);
  res.status(201).send('create');
});

app.listen(8080);
