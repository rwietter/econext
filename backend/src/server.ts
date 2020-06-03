import express, { Request, Response } from 'express';
import cors from 'cors';
import path from 'path';

import Routes from './routes';

const app = express();

app.use(cors());

app.use(express.json());

app.use(Routes, (err: Response, req: Request, res: Response) => {
  res.status(Number(err.status) || 500);
  res.end();
});

app.use('/static', express.static(path.resolve(__dirname, '..', 'static')));

app.listen(3333);
