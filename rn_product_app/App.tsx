import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';

// Simple ListItem component definition
const ListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <View style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ccc' }}>
    {children}
  </View>
);

export default function App() {
 return <AppNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
