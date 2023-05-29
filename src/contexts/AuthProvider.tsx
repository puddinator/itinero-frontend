import { deleteItemAsync, getItemAsync, setItemAsync } from "expo-secure-store";
import { ReactNode, useEffect, useMemo, useReducer } from "react";
import { AuthContext } from "./AuthContext";

interface IState {
  isLoggedIn: boolean;
  isLoading: boolean;
  authToken?: string | null;
}

interface IAction {
  type: "RESTORE_TOKEN" | "SIGN_IN" | "SIGN_OUT";
  authToken?: string | null;
}

const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case "RESTORE_TOKEN":
      return {
        ...state,
        authToken: action.authToken,
        isLoading: false,
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
    isLoading: true,
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

  interface iSignInProps {
    username: string;
    password: string;
  }

  interface iSignUpProps extends iSignInProps {
    email: string;
    image?: string;
  }

  const actions = useMemo(
    () => ({
      signIn: async (data: iSignInProps) => {
        // Send username, password to server and get a token, also handle errors if sign in failed
        let authToken = "dummy-auth-token";
        dispatch({ type: "SIGN_IN", authToken });

        // Set the token in SecureStore
        await setItemAsync("authToken", authToken);
      },
      signOut: async () => {
        dispatch({ type: "SIGN_OUT" });

        // Set the token in SecureStore
        await deleteItemAsync("authToken");
      },
      signUp: async (data: iSignUpProps) => {
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
