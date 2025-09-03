import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import { AppContext } from '../context/AppContext';
import Match from '../models/Match';

export default function HomeScreen({ navigation }) {
  const { matches, setMatches } = useContext(AppContext);
  const [matchName, setMatchName] = useState('');

  const createMatch = () => {
    if (matchName.trim()) {
      const newMatch = new Match(Date.now().toString(), matchName);
      setMatches([...matches, newMatch]);
      setMatchName('');
    }
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Create Match</Text>
      <TextInput
        placeholder="Match Name"
        value={matchName}
        onChangeText={setMatchName}
        style={{ borderWidth: 1, marginVertical: 8, padding: 8 }}
      />
      <Button title="Create" onPress={createMatch} />
      <Text style={{ marginTop: 24, fontSize: 18 }}>Matches</Text>
      <FlatList
        data={matches}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Button
            title={item.name}
            onPress={() => navigation.navigate('Match', { matchId: item.id })}
          />
        )}
      />
    </View>
  );
}
