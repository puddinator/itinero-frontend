import * as SplashScreen from "expo-splash-screen";
import { NativeBaseProvider } from "native-base";
import { useCallback } from "react";
import { View } from "react-native";
import Toast from "react-native-toast-message";

import { ItineroNavigationContainer } from "./src/components/ItineroNavigationContainer";
import { AuthProvider } from "./src/contexts/AuthProvider";
import { useCustomFonts } from "./src/hooks/useCustomFonts";
import { theme } from "./src/theme";

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
      {/* below is for toast messages */}
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <AuthProvider>
          <ItineroNavigationContainer />
          <Toast />
        </AuthProvider>
      </View>
      {/* </SafeAreaProvider> */}
    </NativeBaseProvider>
  );
}
