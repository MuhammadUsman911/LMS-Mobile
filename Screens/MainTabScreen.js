import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Icon from "react-native-vector-icons/Ionicons";
import Homeicon from "react-native-vector-icons/FontAwesome";
import Person from "react-native-vector-icons/MaterialIcons";
import Notifications from "react-native-vector-icons/MaterialIcons";

const Tab = createMaterialBottomTabNavigator();

import HomeScreen from "./HomeScreen";
import DetailScreen from "./DetailScreen";
import FavoriteScreen from "./FavoritesScreen";
import ProfileScreen from "./UpdateScreen";
import UpdateScreen from "./UpdateScreen";

const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Feed"
    activeColor="#fff"
    style={{ backgroundColor: "tomato" }}
  >
    <Tab.Screen
      name="HomeScreen"
      component={HomeStackScreen}
      options={{
        tabBarLabel: "Home",
        tabBarColor: "#8880FF",
        tabBarIcon: ({ color }) => (
          <Homeicon name="home" color={"#fff"} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={UpdateScreen}
      options={{
        tabBarLabel: "Updates",
        tabBarColor: "#8880FF",
        tabBarIcon: ({ color }) => (
          <Notifications name="notifications" color={"#fff"} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="ProfileSreen"
      component={ProfileScreen}
      options={{
        tabBarLabel: "Profile",
        tabBarIcon: ({ color }) => (
          <Person name="person" color={"#fff"} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="FavoriteScreen"
      component={FavoriteScreen}
      options={{
        tabBarLabel: "Favorite",
        tabBarIcon: ({ color }) => (
          <Icon name="ios-menu" color={"#fff"} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#8880FF",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        // title: "overview",
        headerLeft: () => (
          // <Icon.Button name="rocket" size={300} color="#900" />;
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#8880FF"
            onPress={() => {
              navigation.openDrawer("");
            }}
          ></Icon.Button>
        ),
      }}
    />
    <HomeStack.Screen
      name="Student"
      component={DetailScreen}
      // options={{
      //   // title: "overview",
      //   headerLeft: () => (
      //     // <Icon.Button name="rocket" size={300} color="#900" />;
      //     <Icon.Button
      //       name="ios-menu"
      //       size={25}
      //       backgroundColor="#eb8c34"
      //       onPress={() => {
      //         navigation.openDrawer("");
      //       }}
      //     ></Icon.Button>
      //   ),
      // }}
    />
  </HomeStack.Navigator>
);

const DetailStackScreen = ({ navigation }) => (
  <DetailStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#8880FF",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <DetailStack.Screen
      name="Details"
      component={DetailScreen}
      options={{
        // title: "overview",
        headerLeft: () => (
          // <Icon.Button name="rocket" size={300} color="#900" />;
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#8880FF"
            onPress={() => {
              navigation.openDrawer("");
            }}
          ></Icon.Button>
        ),
      }}
    />
  </DetailStack.Navigator>
);
