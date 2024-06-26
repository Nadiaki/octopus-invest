import express from 'express';
import cors from 'cors';
import mainRouter from './routes';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.use('/api', mainRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
