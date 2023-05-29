import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Button, Icon, Input, Pressable, Stack } from "native-base";
import { useContext, useState } from "react";
import { Text } from "react-native";
import { AuthContext } from "../../contexts/AuthContext";

export const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { signIn } = useContext(AuthContext);

  return (
    <>
      <LinearGradient
        colors={["#DD5E89", "#f7bb97d9"]}
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Stack space={4} w="100%" alignItems="center">
          <Input
            // variant="filled"
            w={{ base: "75%" }}
            placeholder="Username"
            // color={"rgba(0, 0, 0, 0.3)"}
          />
          <Input
            w={{ base: "75%" }}
            type={showPassword ? "text" : "password"}
            InputRightElement={
              <Pressable onPress={() => setShowPassword(!showPassword)}>
                <Icon
                  as={
                    <MaterialIcons
                      name={showPassword ? "visibility" : "visibility-off"}
                    />
                  }
                  size={5}
                  mr="2"
                  color="muted.400"
                />
              </Pressable>
            }
            placeholder="Password"
          />
          <Button>
            <Text>Login</Text>
          </Button>
        </Stack>
      </LinearGradient>
    </>
  );
};
