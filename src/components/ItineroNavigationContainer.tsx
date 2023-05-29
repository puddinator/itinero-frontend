import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthStack } from "../screens/AuthStack";
import { AppStack } from "../screens/AppStack";
import { LottieSplash } from "./LottieSplash";

const Stack = createNativeStackNavigator();

export const ItineroNavigationContainer = () => {
  const { isLoggedIn, isLoadingInitial } = useContext(AuthContext);

  console.log("checking from app.js if logged in: ", isLoggedIn);

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
