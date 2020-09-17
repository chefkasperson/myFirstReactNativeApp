import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState("Erik")
  const [age, setAge] = useState(39)

  const handleNameChange = (val) => setName(val)
  const handleAgeChange = (val) => setAge(val)

  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput
       style={styles.input}
       placeholder='e.g. JohnDoe'
       onChangeText={handleNameChange}
       />
      <Text>Enter Age:</Text>
      <TextInput
       style={styles.input}
       placeholder='e.g. 53'
       onChangeText={handleAgeChange}
       />
      <Text>name: {name}, age: {age} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor:'#777',
    backgroundColor: '#eee',
    color: '#444',
    padding: 8,
    margin: 10,
    width: 200,

  }
});
