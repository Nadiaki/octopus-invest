import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { Course, UserCourseDetails } from '../types'; // Import the shared types

interface CoursesContextType {
  courseDetails: UserCourseDetails | null;
  loading: boolean;
  error: string | null;
}

interface CoursesProviderProps {
  children: ReactNode;
}

const CoursesContext = createContext<CoursesContextType | undefined>(undefined);

export const CoursesProvider: React.FC<CoursesProviderProps> = ({ children }) => {
  const [courseDetails, setCourseDetails] = useState<UserCourseDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const coursesResponse = await fetch('/api/courses/details/1');
        const coursesData = await coursesResponse.json();

        const flattenedStartedCourses = coursesData.startedCourses.map((courseObj: { course: Course; completionPercentage: number; }) => {
          return {
            ...courseObj.course,
            completionPercentage: courseObj.completionPercentage
          };
        });

        setCourseDetails({ startedCourses: flattenedStartedCourses, otherCourses: coursesData.otherCourses });
        setLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        }
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <CoursesContext.Provider value={{ courseDetails, loading, error }}>
      {children}
    </CoursesContext.Provider>
  );
};

export default CoursesContext;
