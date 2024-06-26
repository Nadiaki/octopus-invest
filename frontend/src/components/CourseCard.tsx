import React from 'react';
import { Card, CardContent, Typography, Button, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

interface Course {
  id: number;
  title: string;
  author: string;
  lessons: number;
  time: string;
  likes: number;
}

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: '8px' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {course.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Author: {course.author}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lessons: {course.lessons}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Time: {course.time} hours
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Likes: {course.likes}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component={Link} to={`/courses/${course.id}`}>
          View Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default CourseCard;
