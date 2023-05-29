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
import { LottieSplash } from "./src/components/LottieSplash";
import { ItineroNavigationContainer } from "./src/components/ItineroNavigationContainer";

SplashScreen.preventAutoHideAsync();

export default function App() {
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
        <AuthProvider>
          <ItineroNavigationContainer />
        </AuthProvider>
      </View>
      {/* </SafeAreaProvider> */}
    </NativeBaseProvider>
  );
}
