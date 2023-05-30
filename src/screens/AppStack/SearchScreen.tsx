import { useContext } from "react";
import { Text, View } from "react-native";
import { AuthContext } from "../../contexts/AuthContext";

export const SearchScreen = () => {
  const { signOut } = useContext(AuthContext);

  return (
    <>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Search Screen</Text>
      </View>
    </>
  );
};
