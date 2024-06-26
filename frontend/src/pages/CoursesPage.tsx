import React, { useContext } from 'react';
import CoursesContext from '../context/CoursesContext';
import CourseCard from '../components/CourseCard';
import { Box, Grid, Typography } from '@mui/material';

const CoursesPage: React.FC = () => {
  const context = useContext(CoursesContext);

  if (!context) {
    return <div>Loading...</div>;
  }

  const { courses, loading, error } = context;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Courses
      </Typography>
      <Grid container spacing={2}>
        {courses.map(course => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={course.id}>
            <CourseCard course={course} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CoursesPage;
