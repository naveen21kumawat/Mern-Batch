import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import HomeScreen from './screens/HomeScreen';
import MatchScreen from './screens/MatchScreen';
import TeamScreen from './screens/TeamScreen';
import PlayerScreen from './screens/PlayerScreen';
import ScoreboardScreen from './screens/ScoreboardScreen';
import LeaderboardScreen from './screens/LeaderboardScreen';

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/match/:matchId" element={<MatchScreen />} />
          <Route path="/match/:matchId/team/:teamId" element={<TeamScreen />} />
          <Route path="/match/:matchId/team/:teamId/player/:playerId" element={<PlayerScreen />} />
          <Route path="/scoreboard/:matchId" element={<ScoreboardScreen />} />
          <Route path="/leaderboard" element={<LeaderboardScreen />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
