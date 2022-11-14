import React from 'react';
import Copyright from '../components/Copyright';
import Image from '../components/LandingImage';
import Image2 from '../components/LandingImage2';
import Media from '../components/Media';

import Navigation from '../components/Navigation';
import Notify from '../components/Notify';
import Soon from '../components/Soon';
import { StyleSheet, SafeAreaView, ScrollView} from 'react-native';


function HomePage(props) {
  return (
    <SafeAreaView style={styles.container}>
     <ScrollView>
      <Navigation />
      <Soon />
      <Image />
      <Notify />
      <Image2 />
      <Media />
      <Copyright />

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0, 0, 0, 0.2)",

  }

});

export default HomePage;
