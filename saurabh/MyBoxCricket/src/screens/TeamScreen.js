import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Player from '../models/Player';

export default function TeamScreen() {
  const { matchId, teamId } = useParams();
  const { matches, setMatches } = useContext(AppContext);
  const match = matches.find(m => m.id === matchId);
  const team = match.teams.find(t => t.id === teamId);
  const [playerName, setPlayerName] = useState('');
  const navigate = useNavigate();

  const addPlayer = () => {
    if (playerName.trim()) {
      team.players.push(new Player(Date.now().toString(), playerName));
      setMatches([...matches]);
      setPlayerName('');
    }
  };

  return (
    <div style={{ padding: 24 }}>
      <h2>{team.name}</h2>
      <input
        placeholder="Player Name"
        value={playerName}
        onChange={e => setPlayerName(e.target.value)}
      />
      <button onClick={addPlayer}>Add Player</button>
      <h3 style={{ marginTop: 32 }}>Players</h3>
      <ul>
        {team.players.map(player => (
          <li key={player.id}>
            <button onClick={() => navigate(`/match/${matchId}/team/${teamId}/player/${player.id}`)}>{player.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
