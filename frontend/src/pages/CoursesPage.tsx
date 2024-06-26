import React, { useContext } from 'react';
import CoursesContext from '../context/CoursesContext';
import CourseCard from '../components/CourseCard';
import { Box, Grid, Typography } from '@mui/material';
import { Course } from '../types';

const CoursesPage: React.FC = () => {
  const context = useContext(CoursesContext);

  if (!context) {
    return <div>Loading...</div>;
  }

  const { courses, progress, loading, error } = context;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const getCourseProgress = (courseId: number) => {
    return progress.find(p => p.courseId === courseId) || null;
  };

  const startedCourses = courses.filter(course => getCourseProgress(course.id));
  const notStartedCourses = courses.filter(course => !getCourseProgress(course.id));

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Continue Learning
      </Typography>
      <Grid container spacing={2}>
        {startedCourses.map((course: Course) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={course.id}>
            <CourseCard course={course} progress={getCourseProgress(course.id)} />
          </Grid>
        ))}
      </Grid>
      <Typography variant="h4" component="h1" gutterBottom>
        You Might Also Like
      </Typography>
      <Grid container spacing={2}>
        {notStartedCourses.map((course: Course) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={course.id}>
            <CourseCard course={course} progress={getCourseProgress(course.id)} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CoursesPage;
