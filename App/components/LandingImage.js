import React from 'react';
import { Image, View, StyleSheet } from 'react-native';


function LandingImage(props) {
  return (
    <View style={styles.container}>
    <Image  style={styles.image} source={require('../assets/images/landing-image-2.png')}/>
    </View>
  );
}

const styles = StyleSheet.create({
   container: {
    alignItems: 'center',

   },

   image: {
    width: 350,
    height: 400,
    resizeMode: 'contain',
    padding: 20,
    
   }
});
export default LandingImage;
