import { Button } from "native-base";
import { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AuthContext } from "../../contexts/AuthContext";

export const SearchScreen = () => {
  const { signOut } = useContext(AuthContext);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Search Screen</Text>
      <Button onPress={signOut}>
        <Text>Sign out</Text>
      </Button>
    </View>
  );
};
