import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
// import AltIcon from 'react-native-vector-icons/FontAwesome5Brands';


function Media(props) {
  return (
    <View style={styles.container}>

    <Icon name="facebook-with-circle" size={30} color="black"  style={styles.icon}/>
    <Icon name="twitter-with-circle" size={30} color="black"  style={styles.icon}/>
    <Icon name="instagram-with-circle" size={30} color="black"  style={styles.icon}/>
    <Icon name="youtube-with-circle" size={30} color="black"  style={styles.icon}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 0,
    alignItems: "space-around",
  },
  icon: {
    paddingLeft: 40,
  }
})
export default Media;
