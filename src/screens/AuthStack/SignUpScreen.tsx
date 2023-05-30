import { LinearGradient } from "expo-linear-gradient";
import { Button, Image, Stack } from "native-base";
import { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

import {
  PasswordInput,
  UsernameInput,
} from "../../components/AuthStack/LoginInput";
import { BackButton } from "../../components/BackButton";
import { AuthContext } from "../../contexts/AuthContext";
import { ISignInProps } from "../../contexts/interfaces/IAuthProvider";

export const SignUpScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { signUp, isLoading } = useContext(AuthContext);

  const logo = require("../../../assets/icon-black.png");
  const navigation = useNavigation();
  return (
    <>
      <LinearGradient
        colors={["#DD5E89", "#f7bb97d9"]}
        style={{
          flex: 1,
          alignItems: "center",
        }}
      >
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Stack space={20} w="100%" maxW="300px" alignItems="center">
            <Image source={logo} alt="itinero logo" size="xl" />
            <Stack space={4} w="75%" maxW="300px" alignItems="center">
              <UsernameInput setUsername={setUsername} />
              <PasswordInput setPassword={setPassword} />
              <PasswordInput
                setPassword={setConfirmPassword}
                placeholder="Confirm Password"
              />
              <Button
                size="lg"
                onPress={() => {
                  const data = { username, password } as ISignInProps;
                  signUp(data);
                }}
                style={{ marginTop: 15 }}
              >
                Sign Up
              </Button>
            </Stack>
          </Stack>
        </View>
      </LinearGradient>

      <View style={{ position: "absolute" }}>
        <BackButton />
      </View>

      <Spinner visible={isLoading} />
    </>
  );
};
