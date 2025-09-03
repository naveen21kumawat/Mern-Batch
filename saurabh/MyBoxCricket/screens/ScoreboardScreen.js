import React, { useContext } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { AppContext } from '../context/AppContext';

export default function ScoreboardScreen({ route, navigation }) {
  const { matchId } = route.params;
  const { matches, setMatches, leaderboard, setLeaderboard } = useContext(AppContext);
  const match = matches.find(m => m.id === matchId);

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
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Scoreboard: {match.name}</Text>
      <FlatList
        data={match.teams}
        keyExtractor={team => team.id}
        renderItem={({ item: team }) => (
          <View style={{ marginVertical: 8 }}>
            <Text style={{ fontSize: 18 }}>{team.name}</Text>
            <FlatList
              data={team.players}
              keyExtractor={player => player.id}
              renderItem={({ item: player }) => (
                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 4 }}>
                  <Text style={{ flex: 1 }}>{player.name} - Runs: {player.runs} (4s: {player.fours}, 6s: {player.sixes})</Text>
                  <Button title="+1" onPress={() => addRun(team.id, player.id, 'run')} />
                  <Button title="4" onPress={() => addRun(team.id, player.id, 'four')} />
                  <Button title="6" onPress={() => addRun(team.id, player.id, 'six')} />
                </View>
              )}
            />
          </View>
        )}
      />
      <Button title="Leaderboard" onPress={() => navigation.navigate('Leaderboard')} />
    </View>
  );
}
