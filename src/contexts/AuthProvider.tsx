import { ReactNode, useEffect, useMemo, useReducer } from "react";
import { deleteItemAsync, getItemAsync, setItemAsync } from "expo-secure-store";
import axios from "axios";
import { AuthContext } from "./AuthContext";

import {
  IAction,
  ISignInProps,
  ISignUpProps,
  IState,
} from "./props/IAuthProvider";

const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case "RESTORE_TOKEN":
      return {
        ...state,
        isLoadingAuth: false,
        isLoggedIn: true,
        authToken: action.authToken,
      };
    case "SIGN_IN":
      return {
        ...state,
        isLoggedIn: true,
        authToken: action.authToken,
      };
    case "SIGN_OUT":
      return {
        ...state,
        isLoggedIn: false,
        authToken: null,
      };
  }
};

export const AuthProvider = (props: { children: ReactNode }) => {
  const { children } = props;

  const [state, dispatch] = useReducer(reducer, {
    isLoggedIn: false,
    isLoadingAuth: true,
    authToken: null,
  });

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let authToken = null;
      try {
        authToken = await getItemAsync("authToken");
      } catch (e) {
        console.log("Error with getting authToken from SecureStore", e);
      }
      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: "RESTORE_TOKEN", authToken });
    };

    bootstrapAsync();
  }, []);

  const actions = useMemo(
    () => ({
      signIn: async (data: ISignInProps) => {
        // Send username, password to server and get a token, and handle errors if sign in failed
        let authToken = "";
        try {
          const response = await axios.post(
            "https://fine-plum-turtle-toga.cyclic.app/login",
            data
          );
          console.log("received response", response.data);
          authToken = response.data.accessToken;
        } catch (error) {
          console.error(error);
        }

        dispatch({ type: "SIGN_IN", authToken });

        // Set the token in SecureStore
        await setItemAsync("authToken", authToken);
      },
      signOut: async () => {
        dispatch({ type: "SIGN_OUT" });

        // Set the token in SecureStore
        await deleteItemAsync("authToken");
      },
      signUp: async (data: ISignUpProps) => {
        // Send sign up data to server and get a token, also handle errors if sign up failed
        let authToken = "dummy-auth-token";
        dispatch({ type: "SIGN_IN", authToken });

        // Set the token in SecureStore
        await setItemAsync("authToken", authToken);
      },
    }),
    []
  );
  return (
    <AuthContext.Provider value={{ ...state, ...actions }}>
      {children}
    </AuthContext.Provider>
  );
};
