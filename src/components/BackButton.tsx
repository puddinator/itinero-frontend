import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text, View } from "react-native";
import { Box, Icon } from "native-base";
import { Ionicons } from "@expo/vector-icons";

export const BackButton = () => {
  const navigation = useNavigation();

  return (
    <View style={{ marginTop: 60, marginLeft: 30 }}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Ionicons name="arrow-back" size={50} />
      </TouchableOpacity>
    </View>
  );
};
