import { View, Text } from "react-native";
import { useState, useEffect } from "react";
import React from "react";
import { FlatList } from "react-native-gesture-handler";

const URL = "http://206.189.49.197/User/";

const Users = () => {
  const [user, setUser] = useState();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

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
          <Text>
            {/* {data.firstName}
            {data.lastName} */}
          </Text>
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <View>
                <Text>
                  {item.firstName}
                  {item.lastName}
                  {item.baseID}
                  {item.role}
                </Text>
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default Users;
