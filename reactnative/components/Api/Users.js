import { View, Text, StyleSheet, Button, SafeAreaView } from "react-native";
import { useState, useEffect } from "react";
import React from "react";
import {
  FlatList,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import IconButton from "../IconButton";
import SearchBar from "../SearchBar";
import ItemCategory from "../ItemCategory";

const URL = "http://206.189.49.197/User/";

const UserList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);
  const [masterData, setMasterData] = useState([]);
  const [search, setSearch] = useState("");
  const [onSite, setOnSite] = useState("");
  const [offSite, setOffSite] = useState("");
  const [sick, setSick] = useState("");
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    fetchUsers();
    return () => {};
  }, []);

  const fetchUsers = () => {
    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        setMasterData(json);
        setFilteredData(json);
        setIsLoading(false);
      });
  };

  // useEffect(() => {
  //   if (isLoading) {
  //     fetch(URL)
  //       .then((response) => response.json())
  //       .then((users) => setUsers(users))
  //       .then(() => {
  //         setIsLoading(false);
  //       });
  //   }
  // }, []);

  const searchFilter = (text) => {
    if (text) {
      const newData = masterData.filter((item) => {
        const itemData = item.firstName
          ? item.firstName.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
      setSearch(text);
    } else {
      setFilteredData(masterData);
      setSearch(text);
    }
  };

  return (
    <SafeAreaView>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <View style={styles.inputContainer}>
          <Text style={styles.textItem}> Users </Text>
          <TextInput
            value={search}
            placeholder="Search"
            onChangeText={(text) => searchFilter(text)}
          />
          <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={(user) => user.name}
            data={filteredData}
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

export default UserList;

const styles = StyleSheet.create({
  listItem: {
    padding: 20,
    backgroundColor: "grey",
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
    flex: 2,
  },
  inputContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 60,
    marginHorizontal: 55,
  },
});
