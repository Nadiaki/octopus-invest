import React, { createContext, useState, ReactNode, useContext } from 'react';

// Define the UserContext type
interface UserContextType {
  user: string | null;
  setUser: (user: string | null) => void;
}

// Define the props for the UserProvider component
interface UserProviderProps {
  children: ReactNode;
}

// Create the context with an initial undefined value
const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export default UserContext;
