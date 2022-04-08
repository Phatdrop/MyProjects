import React, {useState} from 'react';
import { View, StyleSheet, Text, Button, Linking, DrawerLayoutAndroid } from 'react-native';

const App = () => {
  const [name, setName] = useState('Style Test')
  
  const onClickHandler = () => {
  setName('Opdateret style test')
  }

  return ( 
    <View style={styles.body}>
      <Text style={styles.text}> {name} </Text>
      <Button title="Update state" onPress={onClickHandler} style={styles.Button}> </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    color: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth:10,
    borderColor: '#03a9f4',
    borderRadius: 10,
    margin:40,

  },
  text: {
    color:'#f23',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
}});

export default App;