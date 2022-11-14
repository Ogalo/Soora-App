import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';


function Soon(props) {
  return (
    <>
    <View style={styles.container}>
    <Text style={styles.coming}>-- coming soon! --</Text>
    <Text style={styles.together}>Bring Muslims Together</Text>
    </View>


    <View style={styles.find}>
    <View >
    <Text>Get It On</Text>

    <View style={styles.store}>
    <Icon name="google-play" size={30} color="black" />
    <Text>Google Play</Text>
    </View>

    </View>

    <View>
    <Text>Download on the</Text>

    <View style={styles.store}>
    <Icon name="app-store" size={30} color="black" />
    <Text>App Store</Text>
    </View>
    </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
   alignItems: 'center',
   flexDirection: "column",
   paddingTop: 100,

  },

  find: {
    flexDirection: 'row',
    justifyContent: "space-between",
    margin: 20,
    marginTop: 40,

  },

   coming: {
    fontWeight: "normal",
    fontSize: 20,
   },

   together: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: 'center',
    marginTop: 20,
   },

   store: {
    flexDirection: 'row',
    alignItems: 'center',
   }



});

export default Soon;
