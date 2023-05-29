import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";

import { AuthProvider } from "./src/contexts/AuthProvider";
import { AppStack } from "./src/screens/AppStack";
import { AuthStack } from "./src/screens/AuthStack";
import { AuthContext } from "./src/contexts/AuthContext";
import { useContext } from "react";

const Stack = createNativeStackNavigator();

export default function App() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <NativeBaseProvider>
      {/* <SafeAreaProvider> */}
      <AuthProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            {isLoggedIn ? (
              <Stack.Screen name="App" component={AppStack} />
            ) : (
              <Stack.Screen name="Auth" component={AuthStack} />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </AuthProvider>
      {/* </SafeAreaProvider> */}
    </NativeBaseProvider>
  );
}
