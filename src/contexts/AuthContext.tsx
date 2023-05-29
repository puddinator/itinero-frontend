import { createContext } from "react";

interface IAuthContext {
  isLoggedIn: boolean;
  isLoading: boolean;
  authToken?: string | null;
  signIn: (data: any) => void;
  signOut: () => void;
  signUp: (data: any) => void;
}

export const AuthContext = createContext<IAuthContext>({
  isLoggedIn: false,
  isLoading: true,
  authToken: null,
  signIn: (data: any) => {},
  signOut: () => {},
  signUp: (data: any) => {},
});
