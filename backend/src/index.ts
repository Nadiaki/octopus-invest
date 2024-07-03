import express from 'express';
import cors from 'cors';
import path from 'path';
import mainRouter from './routes';
import "reflect-metadata"
import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import { Course } from './entity';

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


const course = new Course()
course.title = "Intro to Investing"
course.author = "Author 1"
course.lessons = 10
course.likes = 100
course.image = "/images/book.jpg"

const courseRepository = AppDataSource.getRepository(Course)

await courseRepository.save(course)
const savedCourses = courseRepository.find()
console.log("Loaded courses: ", savedCourses)





