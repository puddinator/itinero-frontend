import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import React, { Component } from "react";
import { LinearGradient } from "expo-linear-gradient";

export const GuidesScreen = () => {
  return (
    <>
      <LinearGradient
        colors={["#DD5E89", "#f7bb97d9"]}
        style={{
          flex: 1,
          alignItems: "center",
        }}
      >
        <View style={styles.container}>
      <View style={styles.background}>
        <View style={styles.group}>
          <Text style={styles.displaying2}>Displaying Guides for:</Text>
          <Text style={styles.singapore}>Singapore</Text>
        </View>
        <View style={styles.listBackground}>
          <Text style={styles.featuredGuides}>Featured Guides</Text>
          <View style={styles.guide}>
            <TouchableOpacity style={styles.button}>
              <Image
                source={require("../../../assets/hotel.jpg")}
                resizeMode="cover"
                style={styles.image}
              ></Image>
              <Text style={styles.quintessential}>
                Quintessential Singapore
              </Text>
              <View style={styles.byUser1Row}>
                <Text style={styles.byUser1}>By: user1</Text>
                <Text style={styles.loremIpsum}>4 hrs</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    width: 360,
    height: 760,
    backgroundColor: "rgba(221,94,137,0.89)"
  },
  group: {
    width: 158,
    height: 18,
    marginTop: 41,
    marginLeft: 10
  },
  displaying2: {
    fontFamily: "Lexend-Bold",
    color: "rgba(18,18,18,1)"
  },
  singapore: {
    fontFamily: "Lexend-Bold",
    color: "rgba(162,210,255,1)"
  },
  listBackground: {
    width: 360,
    height: 656,
    backgroundColor: "rgba(230,230,230,0.5)",
    borderRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    marginTop: 45
  },
  featuredGuides: {
    fontFamily: "Lexend-Regular",
    color: "#121212",
    fontSize: 16,
    marginTop: 23,
    marginLeft: 10
  },
  guide: {
    width: 259,
    height: 195,
    marginTop: 14,
    marginLeft: 10
  },
  button: {
    width: 259,
    height: 254,
    backgroundColor: "rgba(230,230,230,1)",
    borderRadius: 15
  },
  image: {
    width: 259,
    height: 195,
    borderRadius: 15
  },
  quintessential: {
    fontFamily: "Lexend-Regular",
    color: "#121212",
    marginTop: 7,
    marginLeft: 3
  },
  byUser1: {
    fontFamily: "Lexend-Regular",
    color: "#121212",
    fontSize: 12
  },
  loremIpsum: {
    fontFamily: "Lexend-Regular",
    color: "#121212",
    marginLeft: 169,
    marginTop: 5
  },
  byUser1Row: {
    height: 22,
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 3,
    marginRight: 7
  }
});