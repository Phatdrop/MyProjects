import { View, Text, StyleSheet} from "react-native";
import { useState, useEffect } from "react";
import React from "react";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import {Card} from 'react-native-paper';

const URL = "http://206.189.49.197/User/";

const Users = () => {
  const [user, setUser] = useState();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);

 
  return (
      <View>
      {isLoading ? (
        <Text>Loading...</Text>
        ) : (
          <View>
          <FlatList
            data={data}
            extraData={data}
            initialNumToRender={2}
            maxToRenderPerBatch={1}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              data.map((item) => (
              <Card> 
              <View style= {styles.listItem}>
                <Text style={styles.textItem}>
                  {item.firstName + " " + item.lastName + " "+ item.currentAbsenceStatus}  
                  
                  </Text>
              </View>
              </Card>
        )))} 
          />
        </View>
      )}
    </View>
  );
};

export default Users;

const styles = StyleSheet.create({
  listItem:{
    padding: 20,
    backgroundColor: '#ccc',
    borderColor: 'black',
    justifyContent: 'space-between',
    borderWidth: 1,
    margin: 10,
    borderColor: 'blue',
    borderRadius: 50,
    flex: 1,
  },
  textItem: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    alignSelf: 'center',
  },
  viewBackground: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
