import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

import { AppNavBar } from "../routes/AppNavBar";
import { AuthStack } from "../routes/AuthStack";
import { LottieSplash } from "./LottieSplash";

const Stack = createNativeStackNavigator();

export const ItineroNavigationContainer = () => {
  const { isLoggedIn, isLoadingInitial } = useContext(AuthContext);

  const [isAnimationFinish, setIsAnimationFinish] = useState(false);

  return (
    <>
      {isLoadingInitial || !isAnimationFinish ? (
        <LottieSplash setIsAnimationFinish={setIsAnimationFinish} />
      ) : (
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            {isLoggedIn ? (
              <Stack.Screen name="App" component={AppNavBar} />
            ) : (
              <Stack.Screen name="Auth" component={AuthStack} />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
};
