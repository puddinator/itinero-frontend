import { useContext, useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import {
  Box,
  Button,
  HStack,
  Icon,
  Image,
  Input,
  Pressable,
  Stack,
} from "native-base";

import { AuthContext } from "../../contexts/AuthContext";
import { ISignInProps } from "../../contexts/props/IAuthProvider";

export const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { signIn, isLoggedIn } = useContext(AuthContext);

  const logo = require("../../../assets/icon-black.png");

  return (
    <>
      <LinearGradient
        colors={["#DD5E89", "#f7bb97d9"]}
        style={{
          flex: 1,
          alignItems: "center",
          // justifyContent: "center",
        }}
      >
        <Box
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Stack space={20} w="100%" maxW="300px" alignItems="center">
            <Image source={logo} alt="itinero logo" size="xl" />
            <Stack space={4} w="75%" maxW="300px" alignItems="center">
              <Input
                size="2xl"
                placeholder="Username"
                placeholderTextColor="grey"
                // bg={"rgba(0, 0, 0, 0.3)"}
                // color="white"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={setUsername}
              />
              <Input
                size="2xl"
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
                      color="grey"
                    />
                  </Pressable>
                }
                placeholder="Password"
                placeholderTextColor="grey"
                onChangeText={setPassword}
              />
              <Button
                size="lg"
                onPress={() => {
                  const data = { username, password } as ISignInProps;
                  console.log(data);
                  signIn(data);
                }}
              >
                Login
              </Button>
            </Stack>
          </Stack>
        </Box>
        <HStack marginTop="auto" marginBottom={10}>
          <Text style={{ fontSize: 15, fontWeight: "300" }}>
            Don't have an account?{" "}
          </Text>
          <TouchableOpacity>
            <Text style={{ color: "#717FFE", fontSize: 15, fontWeight: "300" }}>
              Sign up
            </Text>
          </TouchableOpacity>
        </HStack>
      </LinearGradient>
    </>
  );
};
