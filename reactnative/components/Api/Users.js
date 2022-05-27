import { View, Text, StyleSheet} from "react-native";
import { useState, useEffect } from "react";
import React from "react";
import { FlatList, ScrollView, TouchableOpacity} from "react-native-gesture-handler";

const URL = "http://206.189.49.197/User/";


const Users = () => {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [filteredList, setFilteredList] = useState(users);
  const [onSite, setOnSite] = useState("");
  const [offSite, setOffSite] = useState("");
  const [sick, setSick] = useState("");
  const [toggle, setToggle] = useState(true);

  

  useEffect(() => {
    if (isLoading) {
      fetch(URL)
        .then((response) => response.json())
        .then((users) => setUsers(users))
        .then(() => {
          setIsLoading(false);
        });
      }
    }, []);

   
   
// useEffect(() => {
//   var filteredData = filterByOffSite(users);
//   filteredData = filterByOnsite(filteredData);
//   setFilteredList(filteredData);
// }, [onSite, offSite, sick]);

//   const filterByOnsite = (filteredData) => {
//     if (!onSite) {
//       return filteredData;
//     }
//     const filteredUsers = filteredData.filter(
//       (users) => users.currentAbsenceStatus === "OnSite".indexOf(onSite) !== -1 );

//       return filteredUsers;
//     };

//     const filterByOffSite = (filteredData) => {
//       if (!offSite) {
//         return filteredData; 
//       }

//       const filteredUsers = filteredData.filter(
//         (users) => users.currentAbsenceStatus === offSite.indexOf(offSite) !== -1 );
//         return filteredUsers;
//     }
//       const handleOnSiteChange = (event) => {
//         setOnSite(event.target.value);
//       }
//       const handleOffSiteChange = (event) => {
//         const offSite = event.target.value;
//       }
//       const handleSickChange = (event) => {
//         const sick = event.target.value;
//       }


      // return (
      //   <View>
      //     <View> 
      //   <View> 
      //     <Button
      //     title="OnSite"
      //     value = {onSite}
      //     onPress= {handleOnSiteChange} />
      //   </View>
      //   <Button
      //   title="OffSite"
      //   value = {offSite}
      //   onPress= {handleOffSiteChange} /> 
      //   </View>
      //   <Button 
      //   title="Sick"
      //   value = {sick}
      //   onPress= {handleSickChange} />
      //   </View> 
        
      // )
  // return (
  //   <View id = "user-list">
  //     {filteredList.map((item,index) => (
  //       <View className="User-item" key={index}>
  //         <View className="UserFirstName">{`FirstName: ${item.firstName}`} </View>
  //         <View className="UserLastName">{`LastName: ${item.lastName}`} </View>
  //         <View className="UserStatus">{`Status: ${item.currentAbsenceStatus}`} </View>
  //       </View>  
  //     ))}
  //   </View>
  // )

  return (
      <View style = {styles.container}>
      {isLoading ? (
        <Text>Loading...</Text>
        ) : (
          <View style = {styles.container}> 
          <FlatList
            keyExtractor={(item) => item.id}
            data={users}
            renderItem={({ item }) => (
              <View style = {styles.card}> 
              <View style= {styles.listItem}>
                <Text style={styles.textItem}>
                  {item.firstName + " " + item.lastName + " "+ item.currentAbsenceStatus}  
                  </Text>
              </View>
              </View>
            )} 
            />
          <View style={{backgroundColor:"orange"}}> 
          </View>
          <View style={{backgroundColor:"yellow"}}>
          </View>
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
  card: {
    borderRadius: 6,
    top: 140,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 10,
  },
  filterButton: {
    backgroundColor: "#009688",
    alignItems: "center",
    padding:10,
    borderRadius: 50,
    margin: 10,
    width: 70,
    height: 70,
    justifyContent: "center",
    left: 1,
    top: -300,
    flexDirection:"column",

  },
  buttonView: 
  {
    marginTop: 100,
    marginLeft: 1,
    marginRight: 1,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "black", 
    overflow: "hidden",
    marginBottom: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
});
