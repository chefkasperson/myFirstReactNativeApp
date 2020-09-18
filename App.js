import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key='1' },
    { text: "create an app", key='2' },
    { text: "play on the switch", key='3' }
  ])
  return (
    <View style={styles.container} >
      {/* Header */}
      <View style={styles.content}>
        {/* TODO form */}
        <View style={styles.list} >
          <FlatList />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  
});
