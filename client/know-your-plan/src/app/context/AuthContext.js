// context/AuthContext.js
'use client';

import { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // null = loading, false = not logged in

  const fetchUser = async () => {
    try {
      const res = await fetch('https://your-api.onrender.com/api/me', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (!res.ok) throw new Error('User not authenticated');

      const data = await res.json();
      setUser(data.user);
    } catch (err) {
      setUser(false); // explicitly set to false if auth fails
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, fetchUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
