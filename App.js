import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState('Erik')
  const [person, setPerson] = useState({name: "Isla", age: 2})
  const clickHandler = () => {
    name === "Erik" ? setName("Harold") : setName("Erik")
    person.name === "Isla" ? setPerson({name: "Tais", age: 38}) : setPerson({name: "Isla", age: 2})
  }
  return (
    <View style={styles.container}>
     <Text>My name is {name}</Text>
     <Text>Her name is {person.name} and she is {person.age} years old</Text>
     <View style={styles.buttonContainer}>
      <Button title="update state" onPress={clickHandler}/>
     </View>
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
  buttonContainer: {
    marginTop: 20,
  }
});
