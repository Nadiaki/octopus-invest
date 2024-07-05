import express from 'express';
import cors from 'cors';
import path from 'path';
import mainRouter from './routes';
import "reflect-metadata"
import { AppDataSource } from './database/data-source';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use('/api', mainRouter);

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, '../public')));

const serverInit = async () => {
  try {
    await AppDataSource.initialize();
    console.log('Data Source has been initialized!');

    // Start the server only after database has been initialized
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });

    app.get('/', (req, res) => {
      res.send('Hello World!');
    });

  } catch (error) {
    console.error('Error during Data Source initialization:', error);
  }
}

serverInit();






