import {
  NavigationContainer,
  useNavigationBuilder,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState } from "react";
import "react-native-gesture-handler";
import ScreenA from "./screens/ScreenA";
import ScreenB from "./screens/ScreenB";
import Intro from "./screens/Intro";
import {
  View,
  StyleSheet,
  Text,
  Button,
  Linking,
  DrawerLayoutAndroid,
  Alert,
  Modal,
} from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import {
  PanGestureHandler,
  ScrollView,
  Swipeable,
} from "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

function App() {
  return (
    <Intro> 
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
      </Tab.Navigator>
    </NavigationContainer>
    </Intro>
  );
}

export default App;
