import {
  NavigationContainer,
  useNavigationBuilder,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";
import "react-native-gesture-handler";
import ScreenA from "./screens/ScreenA";
import ScreenB from "./screens/ScreenB";
import Intro from "./screens/Intro";
import Camera from "./screens/Camera";
import {
  View,
  StyleSheet,
  Text,
  Button,
  Linking,
  DrawerLayoutAndroid,
  Alert,
  Modal,
  FlatList,
} from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import {
  PanGestureHandler,
  ScrollView,
  Swipeable,
} from "react-native-gesture-handler";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Tab = createMaterialTopTabNavigator();

export default function App() {
  const [user, setUser] = useState({});
  const findUser = async () => {
    const result = await AsyncStorage.getItem("user");
    if (result !== null) {
      setUser(JSON.parse(result));
    }
  };

  useEffect(() => {
    findUser();
  }, []);

  if (!user.name) return <Intro onFinish={findUser} />;
  else {
    return (
      <NavigationContainer>
        <Tab.Navigator options={{ headerShown: false }}>
          <Tab.Screen
            name="Home"
            component={ScreenA}
            options={{
              header: () => null,
            }}
          />
          <Tab.Screen name="New Post" component={ScreenB} />
          <Tab.Screen name="Camera" component={Camera} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
