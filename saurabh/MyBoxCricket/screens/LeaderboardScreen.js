import React, { useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import { AppContext } from '../context/AppContext';

export default function LeaderboardScreen() {
  const { leaderboard } = useContext(AppContext);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Leaderboard</Text>
      <FlatList
        data={leaderboard.sort((a, b) => b.runs - a.runs)}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 8 }}>
            <Text style={{ fontSize: 18 }}>{item.name} ({item.team}, {item.match})</Text>
            <Text>Runs: {item.runs} | 4s: {item.fours} | 6s: {item.sixes}</Text>
          </View>
        )}
      />
    </View>
  );
}
