import { useCallback, useContext, useRef, useState } from "react";
import { View } from "react-native";
import { NativeBaseProvider } from "native-base";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthProvider } from "./src/contexts/AuthProvider";
import { AuthContext } from "./src/contexts/AuthContext";
import { useCustomFonts } from "./src/hooks/useCustomFonts";
import { AppStack } from "./src/screens/AppStack";
import { AuthStack } from "./src/screens/AuthStack";
import { theme } from "./src/theme";
import { LottieSplash } from "./src/screens/LottieSplash";

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {
  const { isLoggedIn } = useContext(AuthContext);
  const [isAnimationFinish, setIsAnimationFinish] = useState(false);

  const { fontsLoaded } = useCustomFonts();
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }

  return (
    <NativeBaseProvider theme={theme}>
      {/* <SafeAreaProvider> */}
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        {!isAnimationFinish ? (
          <LottieSplash setIsAnimationFinish={setIsAnimationFinish} />
        ) : (
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
        )}
      </View>
      {/* </SafeAreaProvider> */}
    </NativeBaseProvider>
  );
}
