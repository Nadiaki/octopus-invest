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

AppDataSource.initialize().then(async () => {

  console.log("Inserting a new user into the database...")
  const user = new User()
  user.firstName = "Timber"
  user.lastName = "Saw"
  user.age = 25
  await AppDataSource.manager.save(user)
  console.log("Saved a new user with id: " + user.id)

  console.log("Loading users from the database...")
  const users = await AppDataSource.manager.find(User)
  console.log("Loaded users: ", users)

  const course = new Course()
  course.title = "Intro to Investing"
  course.author = "Author 1"
  course.lessons = 10
  course.likes = 100
  course.image = "/images/book.jpg"
  await AppDataSource.manager.save(course)
  const courses = await AppDataSource.manager.find(Course)
  console.log("Loaded courses: ", courses)


}).catch(error => console.log(error))


