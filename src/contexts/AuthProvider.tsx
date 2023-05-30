import { ReactNode, useEffect, useMemo, useReducer } from "react";
import { deleteItemAsync, getItemAsync, setItemAsync } from "expo-secure-store";
import axios from "axios";
import Toast from "react-native-toast-message";

import { AuthContext } from "./AuthContext";

import {
  IAction,
  ISignInProps,
  ISignUpProps,
  IState,
} from "./interfaces/IAuthProvider";

const showToast = () => {
  Toast.show({
    type: "error",
    text1: "Something went wrong...",
    text2: "Check your inputs.",
  });
};

const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
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
    case "RESTORED_TOKEN":
      return {
        ...state,
        isLoadingInitial: false,
        isLoggedIn: true,
        authToken: action.authToken,
      };
    case "LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "LOADED":
      return {
        ...state,
        isLoadingInitial: false,
        isLoading: false,
      };
  }
};

export const AuthProvider = (props: { children: ReactNode }) => {
  const { children } = props;

  const [state, dispatch] = useReducer(reducer, {
    isLoadingInitial: true,
    isLoading: false,
    isLoggedIn: false,
    authToken: null,
  });

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      try {
        const authToken = await getItemAsync("authToken");

        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        if (!!authToken) dispatch({ type: "RESTORED_TOKEN", authToken });
        dispatch({ type: "LOADED" });
      } catch (e) {
        console.log("Error with getting authToken from SecureStore", e);
        showToast();
      }
    };

    bootstrapAsync();
  }, []);

  const actions = useMemo(
    () => ({
      signIn: async (data: ISignInProps) => {
        dispatch({ type: "LOADING" });
        // Send username, password to server and get a token, and handle errors if sign in failed
        try {
          const response = await axios.post(
            "https://fine-plum-turtle-toga.cyclic.app/login",
            data
          );
          console.log("token", response);
          const authToken = response.data.accessToken;

          if (!!authToken) dispatch({ type: "SIGN_IN", authToken });
          else showToast();

          // Set the token in SecureStore
          await setItemAsync("authToken", authToken);
        } catch (error) {
          console.error(error);
          showToast();
        }
        dispatch({ type: "LOADED" });
      },

      signUp: async (data: ISignUpProps) => {
        dispatch({ type: "LOADING" });
        // Send sign up data to server and get a token, also handle errors if sign up failed
        // For some reason bob used urlencoded.. hope this works
        try {
          const formattedData = Object.keys(data)
            // @ts-ignore
            .map((key) => `${key}=${encodeURIComponent(data[key])}`)
            .join("&");

          const options = {
            method: "POST",
            headers: { "content-type": "application/x-www-form-urlencoded" },
            formattedData,
            url: "https://fine-plum-turtle-toga.cyclic.app/register",
          };

          const response = await axios(options);
          console.log("token", response);
          const authToken = response.data.accessToken;

          if (!!authToken) dispatch({ type: "SIGN_IN", authToken });
          else showToast();

          // Set the token in SecureStore
          await setItemAsync("authToken", authToken);
        } catch (error) {
          console.error(error);
          showToast();
        }
        dispatch({ type: "LOADED" });
      },

      signOut: async () => {
        dispatch({ type: "LOADING" });
        dispatch({ type: "SIGN_OUT" });

        // Set the token in SecureStore
        await deleteItemAsync("authToken");
        dispatch({ type: "LOADED" });
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
