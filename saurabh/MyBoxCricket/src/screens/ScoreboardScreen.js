import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

export default function ScoreboardScreen() {
  const { matchId } = useParams();
  const { matches, setMatches, leaderboard, setLeaderboard } = useContext(AppContext);
  const match = matches.find(m => m.id === matchId);
  const navigate = useNavigate();

  const addRun = (teamId, playerId, type) => {
    const team = match.teams.find(t => t.id === teamId);
    const player = team.players.find(p => p.id === playerId);
    if (type === 'run') player.runs += 1;
    if (type === 'four') { player.runs += 4; player.fours += 1; }
    if (type === 'six') { player.runs += 6; player.sixes += 1; }
    setMatches([...matches]);
    updateLeaderboard();
  };

  const updateLeaderboard = () => {
    let allPlayers = [];
    matches.forEach(m => {
      m.teams.forEach(t => {
        t.players.forEach(p => {
          allPlayers.push({ ...p, team: t.name, match: m.name });
        });
      });
    });
    setLeaderboard(allPlayers);
  };

  return (
    <div style={{ padding: 24 }}>
      <h2>Scoreboard: {match.name}</h2>
      {match.teams.map(team => (
        <div key={team.id} style={{ marginBottom: 24 }}>
          <h3>{team.name}</h3>
          <ul>
            {team.players.map(player => (
              <li key={player.id} style={{ marginBottom: 8 }}>
                {player.name} - Runs: {player.runs} (4s: {player.fours}, 6s: {player.sixes})
                <button onClick={() => addRun(team.id, player.id, 'run')}>+1</button>
                <button onClick={() => addRun(team.id, player.id, 'four')}>4</button>
                <button onClick={() => addRun(team.id, player.id, 'six')}>6</button>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button onClick={() => navigate('/leaderboard')}>Leaderboard</button>
    </div>
  );
}
