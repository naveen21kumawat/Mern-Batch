import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Team from '../models/Team';

export default function MatchScreen() {
  const { matchId } = useParams();
  const { matches, setMatches } = useContext(AppContext);
  const match = matches.find(m => m.id === matchId);
  const [teamName, setTeamName] = useState('');
  const navigate = useNavigate();

  const addTeam = () => {
    if (teamName.trim()) {
      match.teams.push(new Team(Date.now().toString(), teamName));
      setMatches([...matches]);
      setTeamName('');
    }
  };

  return (
    <div style={{ padding: 24 }}>
      <h2>{match.name}</h2>
      <input
        placeholder="Team Name"
        value={teamName}
        onChange={e => setTeamName(e.target.value)}
      />
      <button onClick={addTeam}>Add Team</button>
      <h3 style={{ marginTop: 32 }}>Teams</h3>
      <ul>
        {match.teams.map(team => (
          <li key={team.id}>
            <button onClick={() => navigate(`/match/${matchId}/team/${team.id}`)}>{team.name}</button>
          </li>
        ))}
      </ul>
      <button
        onClick={() => navigate(`/scoreboard/${matchId}`)}
        disabled={match.teams.length < 2}
      >
        Start Match
      </button>
    </div>
  );
}
