import React from 'react';
import { View, TextInput, Button, Text, StyleSheet, Pressable } from 'react-native';

function Notify(props) {
  const [message, setMessage] = React.useState('');

  return (
    <View style={styles.container}>

    <Text style={styles.coming}>-- Coming Soon! --</Text>
    <Text style={styles.notify}>Get Notified When We Launch</Text>
    <View style={styles.input}>
    <TextInput
        style={styles.inputArea}
        onChangeText={setMessage}
        value={message}
        placeholder="Notify me!"
        keyboardType="email"
      />
      <Pressable style={styles.butt} >
       <Text style={styles.text}> Notify Me</Text>
      </Pressable>

    </View>
    <Text style={styles.warn}>*Don't worry, we won't spam you</Text>

    </View>
  );
}

const styles = StyleSheet.create({
   container: {
    alignItems: 'center',
    flexDirection: "column",

   },

    coming: {
     fontWeight: "normal",
     fontSize: 20,
    },

    notify: {
     fontWeight: "bold",
     fontSize: 25,
     textAlign: 'center',
     marginTop: 20,
    },

    input: {
       width: "92%",
       borderWidth: 1,
       margin: 20,
       flexDirection: 'row',
       justifyContent: 'space-between',
       borderRadius: 150

    },


    butt: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 150,
      backgroundColor: 'black',
      marginRight: 2,
      marginBottom: 2,
      marginTop: 2,
      width: "28%",


    },

    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',

    },

    inputArea: {
      width: "60%",
      margin: 2,
      marginLeft: 10,

    },

    warn: {
      margin: -10,
    }

});

export default Notify;
