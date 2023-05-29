import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthStack } from "./AuthStack";
import { AppStack } from "./AppStack";
import { LottieSplash } from "./LottieSplash";

const Stack = createNativeStackNavigator();

export const ItineroNavigationContainer = () => {
  const { isLoggedIn, isLoadingAuth } = useContext(AuthContext);

  const [isAnimationFinish, setIsAnimationFinish] = useState(false);

  return (
    <>
      {isLoadingAuth || !isAnimationFinish ? (
        <LottieSplash setIsAnimationFinish={setIsAnimationFinish} />
      ) : (
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
      )}
    </>
  );
};
