import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createContext } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthProvider } from "./src/contexts/AuthProvider";
import { AppStack } from "./src/screens/AppStack";
import { AuthStack } from "./src/screens/AuthStack";

// const insets = useSafeAreaInsets();
// Paddings to handle safe area (for old OS), use the below styles
// paddingTop: insets.top,
// paddingBottom: insets.bottom,
// paddingLeft: insets.left,
// paddingRight: insets.right,

interface IAuthContext {
  signIn: (data: any) => void;
  signOut: () => void;
  signUp: (data: any) => void;
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);
const Stack = createNativeStackNavigator();

export default function App() {
  const { authContext, state } = AuthProvider();

  return (
    <SafeAreaProvider>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            {state.authToken ? (
              <Stack.Screen name="App" component={AppStack} />
            ) : (
              <Stack.Screen name="Auth" component={AuthStack} />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </AuthContext.Provider>
    </SafeAreaProvider>
  );
}
