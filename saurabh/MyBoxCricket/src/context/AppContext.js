import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [matches, setMatches] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);

  return (
    <AppContext.Provider value={{ matches, setMatches, leaderboard, setLeaderboard }}>
      {children}
    </AppContext.Provider>
  );
};
