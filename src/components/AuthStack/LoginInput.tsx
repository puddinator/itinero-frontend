import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { HStack, Icon, Input, Pressable, Text } from "native-base";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { AuthStackNavigationProps } from "../../routes/AuthRoutes";

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

interface IProps {
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
}

export const PasswordInput = (props: IProps) => {
  const { setPassword, placeholder = "Password" } = props;
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
      placeholder={placeholder}
      placeholderTextColor="grey"
      onChangeText={setPassword}
    />
  );
};

export const LoginFooter = () => {
  const navigation = useNavigation<AuthStackNavigationProps>();

  return (
    <HStack marginTop="auto" marginBottom={10}>
      <Text style={{ fontSize: 15, fontWeight: "300" }}>
        Don't have an account?{" "}
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate("Sign Up")}>
        <Text style={{ color: "#717FFE", fontSize: 15, fontWeight: "300" }}>
          Sign up
        </Text>
      </TouchableOpacity>
    </HStack>
  );
};
