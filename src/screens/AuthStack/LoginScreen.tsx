import { LinearGradient } from "expo-linear-gradient";
import { Box, Button, Image, Stack } from "native-base";
import { useContext, useState } from "react";

import {
  LoginFooter,
  PasswordInput,
  UsernameInput,
} from "../../components/AuthStack/LoginInput";
import { AuthContext } from "../../contexts/AuthContext";
import { ISignInProps } from "../../contexts/props/IAuthProvider";

export const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useContext(AuthContext);

  const logo = require("../../../assets/Icon-black.png");

  return (
    <>
      <LinearGradient
        colors={["#DD5E89", "#f7bb97d9"]}
        style={{
          flex: 1,
          alignItems: "center",
        }}
      >
        <Box
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Stack space={20} w="100%" maxW="300px" alignItems="center">
            <Image source={logo} alt="itinero logo" size="xl" />
            <Stack space={4} w="75%" maxW="300px" alignItems="center">
              <UsernameInput setUsername={setUsername} />
              <PasswordInput setPassword={setPassword} />
              <Button
                size="lg"
                onPress={() => {
                  const data = { username, password } as ISignInProps;
                  signIn(data);
                }}
              >
                Login
              </Button>
            </Stack>
          </Stack>
        </Box>
        <LoginFooter />
      </LinearGradient>
    </>
  );
};
