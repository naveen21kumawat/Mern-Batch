import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import { AppContext } from '../context/AppContext';
import Player from '../models/Player';

export default function TeamScreen({ route, navigation }) {
  const { matchId, teamId } = route.params;
  const { matches, setMatches } = useContext(AppContext);
  const match = matches.find(m => m.id === matchId);
  const team = match.teams.find(t => t.id === teamId);
  const [playerName, setPlayerName] = useState('');

  const addPlayer = () => {
    if (playerName.trim()) {
      team.players.push(new Player(Date.now().toString(), playerName));
      setMatches([...matches]);
      setPlayerName('');
    }
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{team.name}</Text>
      <TextInput
        placeholder="Player Name"
        value={playerName}
        onChangeText={setPlayerName}
        style={{ borderWidth: 1, marginVertical: 8, padding: 8 }}
      />
      <Button title="Add Player" onPress={addPlayer} />
      <Text style={{ marginTop: 24, fontSize: 18 }}>Players</Text>
      <FlatList
        data={team.players}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Button
            title={item.name}
            onPress={() => navigation.navigate('Player', { matchId, teamId, playerId: item.id })}
          />
        )}
      />
    </View>
  );
}
