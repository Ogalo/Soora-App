import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


function Copyright(props) {
  return (
   <View style={styles.container}>
   <Text>Copyright @2022 Soora. All right reserved</Text>
   </View>
  );
}

const styles = StyleSheet.create({
   container: {
    marginTop: 20,
    alignItems: 'center',
    borderTopWidth: 1,
    padding: 5
   }
})

export default Copyright;
