import { MaterialIcons } from "@expo/vector-icons";
import { HStack, Icon, Input, Pressable, Text } from "native-base";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

export const UsernameInput = (props: {
  setUsername: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const { setUsername } = props;

  return (
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
  );
};

export const PasswordInput = (props: {
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const { setPassword } = props;
  const [showPassword, setShowPassword] = useState(false);

  return (
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
  );
};

export const LoginFooter = () => {
  return (
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
  );
};
