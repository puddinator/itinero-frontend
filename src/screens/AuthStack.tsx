import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LoginScreen } from "./AuthStack/LoginScreen";
import { SignUpScreen } from "./AuthStack/SignUpScreen";

const Auth = createNativeStackNavigator();

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
