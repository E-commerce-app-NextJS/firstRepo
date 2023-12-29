import React, { createContext, useContext, useState } from 'react';

interface UserIdContextType {
  userId: number | null;
  setUserId: (newUserId: number) => void;
  clearUserId: () => void;
}

const UserIdContext = createContext<UserIdContextType>({
  userId: null,
  setUserId: () => {}, 
  clearUserId: () => {}, 
});

const getUserIdString=function():string{
    if( sessionStorage.getItem('userId')===null) return ""
    else return sessionStorage.getItem('userId') || ""
}
const UserIdProvider = ({ children }: { children: React.ReactNode }) => {
  const [userId, setUserId] = useState<number | null>(() =>
    parseInt(getUserIdString()) 
    ); 

  const setNewUserId = (newUserId: number) => {
    setUserId(newUserId);
    sessionStorage.setItem('userId', String(newUserId));
  };

  const clearUserId = () => {
    setUserId(null);
    sessionStorage.removeItem('userId');
  };

  return (
    <UserIdContext.Provider value={{ userId, setUserId: setNewUserId, clearUserId }}>
      {children}
    </UserIdContext.Provider>
  );
};

const useUserId = () => {
    const context = useContext(UserIdContext);
    if (!context) {
      throw new Error('useUserId must be used within a UserIdProvider');
    }
    return context;
  };

export { UserIdProvider, useUserId };