import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { Course, UserProgress } from '../types'; // Import the shared types

interface CoursesContextType {
  courses: Course[];
  progress: UserProgress[];
  loading: boolean;
  error: string | null;
}

interface CoursesProviderProps {
  children: ReactNode;
}

const CoursesContext = createContext<CoursesContextType | undefined>(undefined);

export const CoursesProvider: React.FC<CoursesProviderProps> = ({ children }) => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [progress, setProgress] = useState<UserProgress[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const coursesResponse = await fetch('/api/courses');
        const coursesData = await coursesResponse.json();

        const progressResponse = await fetch('/api/user-progress');
        const progressData = await progressResponse.json();

        setCourses(coursesData);
        setProgress(progressData.progress);
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
    <CoursesContext.Provider value={{ courses, progress, loading, error }}>
      {children}
    </CoursesContext.Provider>
  );
};

export default CoursesContext;
