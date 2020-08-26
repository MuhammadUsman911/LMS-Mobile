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

const UpdateScreen = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 9,
          }}
        >
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
                  source={require("../assets/quiz.png")}
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
                  height: 40,
                  padding: 10,
                  borderBottomWidth: 2,
                  borderBottomColor: "#8880FF",
                }}
              >
                <Text
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    fontSize: 17,
                  }}
                >
                  Web Quiz # 1
                </Text>
              </View>
              <View
                style={{
                  height: 80,
                  backgroundColor: "#8880FF",
                  // alignItems: "center",
                  padding: 8,

                  justifyContent: "space-evenly",
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: 14,
                  }}
                >
                  Date : Wed,25 Mar 2020
                </Text>
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: 15,
                  }}
                >
                  Total Marks : 10
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <TouchableOpacity onPress={() => props.navigation.navigate("Detail")}>
            <View style={styles.product}>
              <View
                style={{
                  height: 40,
                  padding: 10,
                  borderBottomWidth: 2,
                  borderBottomColor: "#8880FF",
                }}
              >
                <Text
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    fontSize: 17,
                  }}
                >
                  SQA Assignment # 2
                </Text>
              </View>
              <View
                style={{
                  height: 80,
                  backgroundColor: "#8880FF",
                  // alignItems: "center",
                  padding: 8,

                  justifyContent: "space-evenly",
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: 14,
                  }}
                >
                  Date : Wed,27 Mar 2020
                </Text>
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: 15,
                  }}
                >
                  Total Marks : 10
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <TouchableOpacity onPress={() => props.navigation.navigate("Detail")}>
            <View style={styles.product}>
              <View
                style={{
                  height: 40,
                  padding: 10,
                  borderBottomWidth: 2,
                  borderBottomColor: "#8880FF",
                }}
              >
                <Text
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    fontSize: 17,
                  }}
                >
                  Data Mining Quiz # 3
                </Text>
              </View>
              <View
                style={{
                  height: 80,
                  backgroundColor: "#8880FF",
                  // alignItems: "center",
                  padding: 8,

                  justifyContent: "space-evenly",
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: 14,
                  }}
                >
                  Date : Wed,29 Mar 2020
                </Text>
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: 15,
                  }}
                >
                  Total Marks : 15
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    flexDirection: "column",
    shadowColor: "black",
    shadowOpacity: 0.16,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 8,
    borderRadius: 10,

    backgroundColor: "#FFE976",
    height: 130,
    // alignItems: "center",
    // justifyContent: "center",
    width: 300,
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

export default UpdateScreen;
