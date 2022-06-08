import { View, Text, StyleSheet, Button, SafeAreaView } from "react-native";
import { useState, useEffect } from "react";
import React from "react";
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import IconButton from "../IconButton";

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
    <SafeAreaView>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <View style={styles.inputContainer}>
          <Text style={styles.textItem}> Users </Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={(user) => user.name}
            data={users}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <View style={styles.listItem}>
                  <Text style={styles.textItem}>
                    {item.firstName +
                      " " +
                      item.lastName +
                      " " +
                      item.currentAbsenceStatus}
                  </Text>
                </View>
              </View>
            )}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Users;

const styles = StyleSheet.create({
  listItem: {
    padding: 20,
    backgroundColor: "#ccc",
    justifyContent: "space-between",
    borderWidth: 1,
    margin: 10,
    borderRadius: 50,
  },
  textItem: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
  },
  ColorChecker: {
    color: "purple",
  },
  card: {
    borderRadius: 120,
    top: 100,
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    paddingBottom: 10,
    paddingTop: 10,
    borderBottomColor: "grey",
    borderBottomWidth: 2,
    borderTopColor: "grey",
    borderRightColor: "grey",
    borderRightWidth: 2,
    backgroundColor: "red",
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 10,
  },
  filterButton: {
    backgroundColor: "#009688",
    alignItems: "center",
    padding: 10,
    borderRadius: 50,
    margin: 10,
    width: 70,
    height: 70,
    justifyContent: "center",
    left: 1,
    top: -300,
    flexDirection: "column",
  },
  buttonView: {
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
    paddingTop: 4,
    paddingHorizontal: 16,
    backgroundColor: "yellow",
    flex: 2,
  },
  inputContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
    marginVertical: 60,
    marginHorizontal: 55,
  },
});
