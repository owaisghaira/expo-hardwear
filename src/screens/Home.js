import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

function Home(props) {
  const [arr, setName] = useState(['owais', 'osama'])
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.mar}>
          <Button style={{ margin: 20 }}
            onPress={() =>
              props.navigation.navigate("About", { name: 'owais' })}
            title='Go to about'
          />
        </View>
        <View style={styles.mar}>
          <Button style={{}}
            onPress={() =>
              props.navigation.navigate("Camera")}
            title='Go to camera'
          />
        </View>
        <View style={styles.mar}>
          <Button style={{ margin: 20 }}
            onPress={() =>
              props.navigation.navigate("ImagePicker")}
            title='Go to Gallery'
          />
        </View>
        <View style={styles.mar}>
          <Button style={{ margin: 20 }}
            onPress={() =>
              props.navigation.navigate("map")}
            title='Go to map'
          />
        </View>
        {arr.map((v, i) => {
          return (
            <View key={i} style={styles.card}>
              <Text style={{ fontSize: 29 }}>{v}</Text>
            </View>
          )
        })}
      </View>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    padding: 30,
    width: "70%",
    backgroundColor: "#fff",
    alignItems: 'center',
    margin: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 8,
  },
  mar: {
    margin: 10
  }
});


export default Home;