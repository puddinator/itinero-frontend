import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { Button } from "native-base";
import React, { Component, useContext } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
// import { AppStackNavigationProps } from "../../screens/AppStack";
import { GuidesRoutes } from "../../routes/GuidesRoutes";
import { AuthContext } from "../../contexts/AuthContext";

export const GuidesScreen = () => {
  const navigation = useNavigation();
  const { signOut } = useContext(AuthContext);

  return (
    <>
      <LinearGradient
        colors={["#DD5E89", "#f7bb97d9"]}
        style={{
          flex: 1,
          alignItems: "center",
        }}
      >
        <View style={styles.group}>
          <Text style={styles.displaying2}>Displaying Guides for:</Text>
          <Text style={styles.singapore}>Singapore</Text>
        </View>
        <Button onPress={signOut} style={styles.signOut}>
          <Text>Sign out</Text>
        </Button>
        <View style={styles.bottom}>
          <View style={styles.listBackground}>
            <Text style={styles.featuredGuides}>Featured Guides</Text>
            <View style={styles.guide}>
              <TouchableOpacity
                style={styles.button}
                // @ts-ignore
                onPress={() => navigation.navigate("Details")}
              >
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
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  group: {
    width: "100%",
    height: 18,
    marginTop: 60,
    marginLeft: 10,
  },
  displaying2: {
    color: "rgba(18,18,18,1)",
  },
  singapore: {
    color: "rgba(162,210,255,1)",
  },
  signOut: {
    marginLeft: 300,
  },
  bottom: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "flex-end",
  },
  listBackground: {
    width: "100%",
    height: "94%",
    backgroundColor: "rgba(230,230,230,0.5)",
    borderRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    marginTop: 45,
  },
  featuredGuides: {
    color: "#121212",
    fontSize: 16,
    marginTop: 23,
    marginLeft: 10,
  },
  guide: {
    width: 259,
    height: 195,
    marginTop: 14,
    marginLeft: 10,
  },
  button: {
    width: 259,
    height: 254,
    backgroundColor: "rgba(230,230,230,1)",
    borderRadius: 15,
  },
  image: {
    width: 259,
    height: 195,
    borderRadius: 15,
  },
  quintessential: {
    color: "#121212",
    marginTop: 7,
    marginLeft: 3,
  },
  byUser1: {
    color: "#121212",
    fontSize: 12,
  },
  loremIpsum: {
    color: "#121212",
    marginLeft: 169,
    marginTop: 5,
  },
  byUser1Row: {
    height: 22,
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 3,
    marginRight: 7,
  },
});
