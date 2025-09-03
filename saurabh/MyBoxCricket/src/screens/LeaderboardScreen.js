import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function LeaderboardScreen() {
  const { leaderboard } = useContext(AppContext);

  return (
    <div style={{ padding: 24 }}>
      <h2>Leaderboard</h2>
      <ul>
        {leaderboard.sort((a, b) => b.runs - a.runs).map(player => (
          <li key={player.id} style={{ marginBottom: 12 }}>
            <strong>{player.name}</strong> ({player.team}, {player.match})<br />
            Runs: {player.runs} | 4s: {player.fours} | 6s: {player.sixes}
          </li>
        ))}
      </ul>
    </div>
  );
}
