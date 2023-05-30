import { Button } from "native-base";
import { useContext } from "react";
import { Text, View } from "react-native";
import { AuthContext } from "../../contexts/AuthContext";

export const MeScreen = () => {
  const { signOut } = useContext(AuthContext);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button onPress={signOut}>
        <Text>Sign out</Text>
      </Button>
    </View>
  );
};
