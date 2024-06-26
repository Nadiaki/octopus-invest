import React from 'react';
import { Card, CardContent, Typography, Button, CardActions, Box, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import { Course } from '../types'; // Import the shared type

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
    <Card sx={{ width: 350, height: 300, margin: '16px', position: 'relative' }}>
      {progress && (
        <Box
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '0.8rem'
          }}
        >
          {completionPercentage.toFixed(0)}% completed
        </Box>
      )}
      <CardMedia
        component="img"
        height="160"
        image={course.image}
        alt={`${course.title} image`}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ padding: '8px' }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
          {course.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          by {course.author}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
          <Typography variant="body2">
            {course.lessons} lessons
          </Typography>
          <Typography variant="body2">
            {course.time}h
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
          <Typography variant="body2">
            {course.likes} <span role="img" aria-label="likes">👍</span>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
