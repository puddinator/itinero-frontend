import { useCallback, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";
import * as SplashScreen from "expo-splash-screen";

import { AuthProvider } from "./src/contexts/AuthProvider";
import { AuthContext } from "./src/contexts/AuthContext";
import { AppStack } from "./src/screens/AppStack";
import { AuthStack } from "./src/screens/AuthStack";
import { useFonts } from "expo-font";
import { View } from "react-native";
import { theme } from "./src/theme";

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Lexend-Thin": require("./assets/fonts/Lexend-Thin.ttf"),
    "Lexend-ExtraLight": require("./assets/fonts/Lexend-ExtraLight.ttf"),
    "Lexend-Light": require("./assets/fonts/Lexend-Light.ttf"),
    "Lexend-Regular": require("./assets/fonts/Lexend-Regular.ttf"),
    "Lexend-Medium": require("./assets/fonts/Lexend-Medium.ttf"),
    "Lexend-SemiBold": require("./assets/fonts/Lexend-SemiBold.ttf"),
    "Lexend-Bold": require("./assets/fonts/Lexend-Bold.ttf"),
    "Lexend-ExtraBold": require("./assets/fonts/Lexend-ExtraBold.ttf"),
    "Lexend-Black": require("./assets/fonts/Lexend-Black.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const { isLoggedIn } = useContext(AuthContext);

  return (
    <NativeBaseProvider theme={theme}>
      {/* <SafeAreaProvider> */}
      {/* <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
        onLayout={onLayoutRootView}
      > */}
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
      {/* </View> */}
      {/* </SafeAreaProvider> */}
    </NativeBaseProvider>
  );
}
