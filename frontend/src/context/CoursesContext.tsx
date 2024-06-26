import React, { createContext, useState, useEffect, ReactNode } from 'react';

// Define the Course interface
interface Course {
  id: number;
  title: string;
  author: string;
  lessons: number;
  time: string;
  likes: number;
}

// Define the context type
interface CoursesContextType {
  courses: Course[];
  loading: boolean;
  error: string | null;
}

// Define the props for the CoursesProvider component
interface CoursesProviderProps {
  children: ReactNode;
}

// Create the context with an initial undefined value
const CoursesContext = createContext<CoursesContextType | undefined>(undefined);

export const CoursesProvider: React.FC<CoursesProviderProps> = ({ children }) => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/courses')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setCourses(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <CoursesContext.Provider value={{ courses, loading, error }}>
      {children}
    </CoursesContext.Provider>
  );
};

export default CoursesContext;
