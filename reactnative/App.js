import React, {useState} from 'react';
import { View, StyleSheet, Text, Button, Linking, DrawerLayoutAndroid, Alert, Modal } from 'react-native';

const App = () => {
  const [name, setName] = useState('')
  const [showWarning, SetShowWarning] = useState(false);
  const [submitted, SetSubmitted] = useState(false);
  const onClickHandler = () => { 
    if (name.length > 3) {
      SetSubmitted(!submitted);
    } else {
      SetShowWarning(true);
    }
  }

  return ( 
    <View style={styles.body}>
      <Text style={styles.text}> {name} </Text>
      <Button title="Update state" onPress={onClickHandler} style={styles.Button}> </Button>
      <Modal visible={showWarning}>
        <Text> The name must be longer than 3 characters </Text>
      </Modal>
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