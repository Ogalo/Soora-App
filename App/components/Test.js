import { StyleSheet, Text, SafeAreaView,Button, View, Alert } from 'react-native';
// import { useDimensions } from '@react-native-community/hooks';

export default function App() {

  const handlePress = () => console.log('Text Clicked')
  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor: 'red',
        width: '100%',
        height: 70

      }}></View>
      <Text numberOfLines={2} onPress={handlePress}>Get it done! A guy from Suswa is here to rock Omera dont joke I can fuck you up this is a test not a joke try me please</Text>
      <Text>Get it done! Lorem I am JJ an guy from Obunklu</Text>
      <View style={{width: 50, height: 80, color: "dodgerblue"}}></View>

      <Button title='Click me' onPress={()=> Alert.alert("Welcome", "Fuck you!", [
        {text: 'Yes', onPress: ()=>console.log('Yes')},
        {text: 'No', onPress: ()=>console.log('No')}
      ])}/>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dddddd',
    alignContent: 'center',
    justifyContent: 'center'

  },

});
