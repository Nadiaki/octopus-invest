import React from 'react';
import { Card, CardContent, Typography, Button, CardActions, Box } from '@mui/material';
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
  progress: {
    completedLessons: number;
    totalLessons: number;
  } | null;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, progress }) => {
  const completionPercentage = progress ? (progress.completedLessons / progress.totalLessons) * 100 : 0;

  return (
    <Card sx={{ maxWidth: 345, margin: '8px', position: 'relative' }}>
      {progress && (
        <Box
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            padding: '4px 8px',
            borderRadius: '4px'
          }}
        >
          {completionPercentage.toFixed(0)}% complete
        </Box>
      )}
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
