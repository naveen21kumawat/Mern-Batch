import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import { AppContext } from '../context/AppContext';
import Team from '../models/Team';

export default function MatchScreen({ route, navigation }) {
  const { matchId } = route.params;
  const { matches, setMatches } = useContext(AppContext);
  const match = matches.find(m => m.id === matchId);
  const [teamName, setTeamName] = useState('');

  const addTeam = () => {
    if (teamName.trim()) {
      match.teams.push(new Team(Date.now().toString(), teamName));
      setMatches([...matches]);
      setTeamName('');
    }
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{match.name}</Text>
      <TextInput
        placeholder="Team Name"
        value={teamName}
        onChangeText={setTeamName}
        style={{ borderWidth: 1, marginVertical: 8, padding: 8 }}
      />
      <Button title="Add Team" onPress={addTeam} />
      <Text style={{ marginTop: 24, fontSize: 18 }}>Teams</Text>
      <FlatList
        data={match.teams}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Button
            title={item.name}
            onPress={() => navigation.navigate('Team', { matchId, teamId: item.id })}
          />
        )}
      />
      <Button
        title="Start Match"
        onPress={() => navigation.navigate('Scoreboard', { matchId })}
        disabled={match.teams.length < 2}
      />
    </View>
  );
}
