import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { AppContext } from '../context/AppContext';

export default function PlayerScreen({ route }) {
  const { matchId, teamId, playerId } = route.params;
  const { matches } = useContext(AppContext);
  const match = matches.find(m => m.id === matchId);
  const team = match.teams.find(t => t.id === teamId);
  const player = team.players.find(p => p.id === playerId);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{player.name}</Text>
      <Text>Runs: {player.runs}</Text>
      <Text>4s: {player.fours}</Text>
      <Text>6s: {player.sixes}</Text>
    </View>
  );
}
