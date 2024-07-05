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

  const { courseDetails, loading, error } = context;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const startedCourses = courseDetails?.startedCourses ?? [];
  const notStartedCourses = courseDetails?.otherCourses ?? [];

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Continue Learning
      </Typography>
      <Grid container spacing={2}>
        {startedCourses.map((course: Course) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={course.courseId}>
            <CourseCard course={course} />
          </Grid>
        ))}
      </Grid>
      <Typography variant="h4" component="h1" gutterBottom>
        You Might Also Like
      </Typography>
      <Grid container spacing={2}>
        {notStartedCourses.map((course: Course) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={course.courseId}>
            <CourseCard course={course} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CoursesPage;
