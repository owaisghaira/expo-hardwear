import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function About({ route, navigation }) {
  const { name } = route.params
  return (
    <View style={styles.container}>
      <Text  style={{ fontSize: 29 }}>About page</Text>
      <Text style={{ fontSize: 29 }}>{name}</Text>
      <Button onPress={() => navigation.navigate("Home")} title='Go to about' />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default About;