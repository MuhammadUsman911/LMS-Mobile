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

const DetailScreen = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Student Service")}
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
                height: 80,
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
                  // backgroundColor: "black",
                }}
              >
                <Image
                  source={require("../assets/Std.png")}
                  style={{ width: "100%", height: "100%" }}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <TouchableOpacity onPress={() => props.navigation.navigate("Detail")}>
            <View style={styles.product}>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  width: 85,
                  height: 85,
                  // marginBottom: 4,
                  borderRadius: 35,
                  // backgroundColor: "black",
                }}
              >
                <Image
                  source={require("../assets/Assignments.png")}
                  style={{ width: "100%", height: "100%" }}
                />
              </View>

              <Text
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >
                Assignments
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.navigate("Detail")}>
            <View style={styles.product}>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  width: 70,
                  height: 70,
                  marginBottom: 13,
                  borderRadius: 35,
                  // backgroundColor: "black",
                }}
              >
                <Image
                  source={require("../assets/courses.png")}
                  style={{ width: "100%", height: "100%" }}
                />
              </View>
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >
                Courses
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <TouchableOpacity onPress={() => props.navigation.navigate("Detail")}>
            <View style={styles.product}>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  width: 70,
                  height: 70,
                  marginBottom: 13,
                  borderRadius: 35,
                  backgroundColor: "#8c52ff",
                }}
              >
                <Image
                  source={require("../assets/MarksSummary.png")}
                  style={{ width: "100%", height: "100%" }}
                />
              </View>

              <Text
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >
                Marks Summary
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.navigate("Detail")}>
            <View style={styles.product}>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  width: 70,
                  height: 70,
                  marginBottom: 13,
                  borderRadius: 35,
                  // backgroundColor: "black",
                }}
              >
                <Image
                  source={require("../assets/Pending.png")}
                  style={{ width: "100%", height: "100%" }}
                />
              </View>

              <Text
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >
                Pending Dues
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <TouchableOpacity onPress={() => props.navigation.navigate("Detail")}>
            <View style={styles.product}>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  width: 85,
                  height: 85,
                  // marginBottom: 13,
                  borderRadius: 35,
                  backgroundColor: "#8c52ff",
                }}
              >
                <Image
                  source={require("../assets/Anouncements.png")}
                  style={{ width: "100%", height: "100%" }}
                />
              </View>

              <Text
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >
                Anouncements
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.navigate("Detail")}>
            <View style={styles.product}>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  width: 70,
                  height: 70,
                  marginBottom: 13,
                  borderRadius: 35,
                  // backgroundColor: "black",
                }}
              >
                <Image
                  source={require("../assets/Resources.png")}
                  style={{ width: "100%", height: "100%" }}
                />
              </View>

              <Text
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >
                Resources
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
    borderRadius: 10,
    backgroundColor: "#8880FF",
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

export default DetailScreen;
