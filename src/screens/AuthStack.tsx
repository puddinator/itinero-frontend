import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import { LoginScreen } from "./AuthStack/LoginScreen";
import { SignUpScreen } from "./AuthStack/SignUpScreen";

type AuthStackParamList = {
  "Sign Up": undefined;
  Login: undefined;
};

export type AuthStackNavigationProps =
  NativeStackNavigationProp<AuthStackParamList>;

const Auth = createNativeStackNavigator<AuthStackParamList>();

export const AuthStack = () => {
  return (
    <Auth.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Auth.Screen name="Login" component={LoginScreen} />
      <Auth.Screen name="Sign Up" component={SignUpScreen} />
    </Auth.Navigator>
  );
};
