import React, { useEffect, useState } from "react";

import {
  FlatList,
  Text,
  Image,
  View,
  Button,
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";

const HomeScreen = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Student")}
          >
            <View
              style={{
                shadowColor: "black",
                shadowOpacity: 0.16,
                shadowOffset: { width: 0, height: 2 },
                shadowRadius: 8,
                elevation: 8,
                overflow: "hidden",
                borderRadius: 10,
                backgroundColor: "white",
                height: 130,
                alignItems: "center",
                justifyContent: "center",
                width: 300,
                margin: 15,
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  width: "100%",
                  height: "100%",
                  // marginBottom: 13,
                  // borderRadius: 35,
                  backgroundColor: "black",
                }}
              >
                <Image
                  source={require("../assets/Main.png")}
                  style={{ width: "100%", height: "100%" }}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Student")}
          >
            <View style={styles.product}>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  width: 90,
                  height: 90,
                  // marginBottom: 3,
                  borderRadius: 35,
                  backgroundColor: "white",
                }}
              >
                <Image
                  source={require("../assets/Self.png")}
                  style={{ width: "100%", height: "100%" }}
                />
              </View>

              <Text
                style={{
                  color: "#8c52ff",
                  fontWeight: "bold",
                  fontSize: 12,
                }}
              >
                Student Self Service
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Student")}
          >
            <View style={styles.product}>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  width: 95,
                  height: 95,
                  // marginBottom: 13,
                  borderRadius: 35,
                  // backgroundColor: "black",
                }}
              >
                <Image
                  source={require("../assets/Course.png")}
                  style={{ width: "100%", height: "100%" }}
                />
              </View>

              <Text
                style={{
                  color: "#8c52ff",
                  fontWeight: "bold",
                  fontSize: 12,
                }}
              >
                Course Management
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Student")}
          >
            <View style={styles.product}>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  width: 90,
                  height: 90,
                  marginBottom: 6,
                  borderRadius: 35,
                  // backgroundColor: "black",
                }}
              >
                <Image
                  source={require("../assets/Collaboration.png")}
                  style={{ width: "100%", height: "100%" }}
                />
              </View>

              <Text
                style={{
                  color: "#8c52ff",
                  fontWeight: "bold",
                  fontSize: 12,
                }}
              >
                Collaboration Portal
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Student")}
          >
            <View style={styles.product}>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  width: 70,
                  height: 70,
                  marginBottom: 14,
                  borderRadius: 35,
                  // backgroundColor: "black",
                }}
              >
                <Image
                  source={require("../assets/Notification.png")}
                  style={{ width: "100%", height: "100%" }}
                />
              </View>

              <Text
                style={{
                  color: "#8c52ff",
                  fontWeight: "bold",
                  fontSize: 12,
                }}
              >
                Notification
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Student")}
          >
            <View style={styles.product}>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  width: 90,
                  height: 90,
                  // marginBottom: 13,
                  borderRadius: 35,
                  //backgroundColor: "black",
                }}
              >
                <Image
                  source={require("../assets/Calender.png")}
                  style={{ width: "100%", height: "100%" }}
                />
              </View>

              <Text
                style={{
                  color: "#8880FF",
                  fontWeight: "bold",
                  fontSize: 12,
                }}
              >
                Calender
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    shadowColor: "black",
    shadowOpacity: 0.16,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 8,
    overflow: "hidden",
    borderRadius: 10,
    backgroundColor: "white",
    height: 130,
    alignItems: "center",
    justifyContent: "center",
    width: 130,
    margin: 20,
  },
  imageContainer: {
    width: "50%",
    height: "60%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  touch: {
    overflow: "hidden",
    borderRadius: 10,
  },
  GridItem: {
    margin: 20,
    // width: "30%",

    height: 100,
    width: 100,
    // borderRadius: ,
    overflow: "hidden",
    elevation: 5,
    backgroundColor: "white",
  },
  background: {
    width: "40%",
    height: 120,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
  Image: {
    width: "90%",
    height: 110,
  },
  title: {
    width: "100%",
    height: 30,

    alignItems: "center",
    justifyContent: "center",
  },
  details: {
    // fontFamily: "open-sans",
    alignItems: "center",
    height: "15%",
    padding: 10,
  },
  title: {
    // fontFamily: "open-sans-bold",
    fontSize: 18,
    marginVertical: 4,
  },
  price: {
    // fontFamily: ,
    fontSize: 14,
    color: "#888",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "25%",
    paddingHorizontal: 20,
  },
});

export default HomeScreen;
