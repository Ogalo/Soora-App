import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {View, StyleSheet, Pressable, Text} from 'react-native';


function Contact(props) {
  return (

  <View style={styles.container}>
      <Pressable style={styles.button} >
       <Text style={styles.text}> Contact Us</Text>
       <Icon name="arrow-up-right" size={18} color="white"/>
      </Pressable>
   </View>




  );
}

const styles = StyleSheet.create({
 container: {
    padding: 5,

 },
 button: {
  flexDirection: 'row',
  alignItems: 'center',
  borderRadius: 5,
  backgroundColor: 'black'

 },
 text: {
  fontSize: 12,
  lineHeight: 18,
  letterSpacing: 0.25,
  color: 'white',

},

});

export default Contact;
