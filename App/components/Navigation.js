import React from 'react';
import { Image, View, StyleSheet, SafeAreaView } from 'react-native';
import Contact from './Contact';

function Navigation(props) {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.logo}>
      <Image source={require("../assets/images/logo.png")}/>
      </View>
      <>
      <Contact />
      </>

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
   alignContent: 'center',
   flexDirection: "row",
   top: 40,
   justifyContent: 'space-between',
   position: 'relative'
  },

  logo: {
    paddingTop: 60,
    left: 20,


  }

});

export default Navigation;
