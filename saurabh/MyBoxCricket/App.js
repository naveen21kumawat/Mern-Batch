import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppProvider } from './context/AppContext';
import HomeScreen from './screens/HomeScreen';
import MatchScreen from './screens/MatchScreen';
import TeamScreen from './screens/TeamScreen';
import PlayerScreen from './screens/PlayerScreen';
import ScoreboardScreen from './screens/ScoreboardScreen';
import LeaderboardScreen from './screens/LeaderboardScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Match" component={MatchScreen} />
          <Stack.Screen name="Team" component={TeamScreen} />
          <Stack.Screen name="Player" component={PlayerScreen} />
          <Stack.Screen name="Scoreboard" component={ScoreboardScreen} />
          <Stack.Screen name="Leaderboard" component={LeaderboardScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}
