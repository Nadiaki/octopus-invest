import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CoursesPage from './pages/CoursesPage';
import { CoursesProvider } from './context/CoursesContext';
import { UserProvider } from './context/UserContext';

const App: React.FC = () => {
  return (
    <UserProvider>
      <CoursesProvider>
        <Router>
          <Routes>
            <Route path="/" element={<CoursesPage />} />
          </Routes>
        </Router>
      </CoursesProvider>
    </UserProvider>
  );
};

export default App;
