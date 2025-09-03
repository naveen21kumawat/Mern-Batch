import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Match from '../models/Match';

export default function HomeScreen() {
  const { matches, setMatches } = useContext(AppContext);
  const [matchName, setMatchName] = useState('');
  const navigate = useNavigate();

  const createMatch = () => {
    if (matchName.trim()) {
      const newMatch = new Match(Date.now().toString(), matchName);
      setMatches([...matches, newMatch]);
      setMatchName('');
    }
  };

  return (
    <div style={{ padding: 24 }}>
      <h2>Create Match</h2>
      <input
        placeholder="Match Name"
        value={matchName}
        onChange={e => setMatchName(e.target.value)}
      />
      <button onClick={createMatch}>Create</button>
      <h3 style={{ marginTop: 32 }}>Matches</h3>
      <ul>
        {matches.map(match => (
          <li key={match.id}>
            <button onClick={() => navigate(`/match/${match.id}`)}>{match.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
