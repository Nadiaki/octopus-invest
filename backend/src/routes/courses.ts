import { Router } from 'express';

const router = Router();

const courses = [
  { id: 1, title: 'Intro to Investing', author: 'Author 1', lessons: 10, time: '10', likes: 100, image: '/images/book.jpg' },
  { id: 2, title: 'Propel Your Career', author: 'Author 2', lessons: 8, time: '10', likes: 200, image: '/images/book.jpg' },
  { id: 3, title: 'Advanced Stock Trading', author: 'Author 3', lessons: 5, time: '15', likes: 150, image: '/images/book.jpg' },
  { id: 4, title: 'Personal Finance Management', author: 'Author 4', lessons: 3, time: '12', likes: 180, image: '/images/book.jpg' },
  { id: 5, title: 'Understanding Cryptocurrency', author: 'Author 5', lessons: 4, time: '14', likes: 220, image: '/images/book.jpg' },
  { id: 6, title: 'Retirement Planning', author: 'Author 6', lessons: 2, time: '8', likes: 90, image: '/images/book.jpg' },
  { id: 7, title: 'Investment Strategies for Beginners', author: 'Author 7', lessons: 3, time: '10', likes: 130, image: '/images/book.jpg' },
  { id: 8, title: 'Financial Market Analysis', author: 'Author 8', lessons: 4, time: '13', likes: 175, image: '/images/book.jpg' },
  { id: 9, title: 'Real Estate Investing', author: 'Author 9', lessons: 5, time: '16', likes: 210, image: '/images/book.jpg' },
  { id: 10, title: 'Risk Management in Finance', author: 'Author 10', lessons: 3, time: '11', likes: 140, image: '/images/book.jpg' },
];

router.get('/', (req, res) => {
  res.json(courses);
});

export default router;
