import express from 'express';
import cors from 'cors';
import path from 'path';
import mainRouter from './routes';
import "reflect-metadata"
import { saveAndLoadCourses } from './database/test';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use('/api', mainRouter);

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

saveAndLoadCourses();




