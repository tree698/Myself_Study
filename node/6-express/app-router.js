import express from 'express';
import postRouter from './router/post.js';
import userRouter from './router/user.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';

const app = express();

const options = {
  dotfiles: 'ignore', //숨겨진 파일 보여지지 않도록
  etag: false,
  index: false,
  maxAge: '1d', //캐시가 얼마동안 가능한지
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now()); //필요한 데이터를 헤더에 추가하여 보냄
  },
};

const corsOptions = {
  origin: ['http://127.0.0.1:5500'], // 여기에서만 접속 가능
  optionsSuccessStatus: 200,
  credentials: true, //Access-Control-Allow-Credentials: true
};

app.use(express.json()); // REST API -> body
app.use(express.urlencoded({ extended: false })); // HTML form에서 보낸 request를 parsing
app.use(express.static('public', options)); // public 폴더 안의 모든 파일에 접근 가능 (url에 폴더 안의 파일명 입력  localhost:8080/image.png)
app.use(cors(corsOptions));
app.use(morgan('tiny')); // 서버에 어떤 요청이 왔는지 모니터링
app.use(cookieParser());
app.use(helmet()); // 보안

app.use('/post', postRouter);
app.use('/user', userRouter);

app.listen(8080);
