import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

export default function PlayerScreen() {
  const { matchId, teamId, playerId } = useParams();
  const { matches } = useContext(AppContext);
  const match = matches.find(m => m.id === matchId);
  const team = match.teams.find(t => t.id === teamId);
  const player = team.players.find(p => p.id === playerId);

  return (
    <div style={{ padding: 24 }}>
      <h2>{player.name}</h2>
      <p>Runs: {player.runs}</p>
      <p>4s: {player.fours}</p>
      <p>6s: {player.sixes}</p>
    </div>
  );
}
