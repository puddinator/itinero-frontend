import { useEffect, useMemo, useReducer } from "react";
import { getItemAsync } from "expo-secure-store";

export const AuthProvider = () => {
  const [state, dispatch] = useReducer(
    (prevState: any, action: { type: any; token?: string | null }) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            authToken: action.token,
            isLoading: false,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            authToken: action.token,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            authToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      authToken: null,
    }
  );

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let authToken;

      try {
        authToken = await getItemAsync("authToken");
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: "RESTORE_TOKEN", token: authToken });
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

  const authContext = useMemo(
    () => ({
      signIn: async (data: iSignInProps) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },
      signOut: () => dispatch({ type: "SIGN_OUT" }),
      signUp: async (data: iSignInProps) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },
    }),
    []
  );
  return { authContext, state };
};
