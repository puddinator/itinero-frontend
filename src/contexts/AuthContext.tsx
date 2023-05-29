import { createContext } from "react";

interface IAuthContext {
  isLoadingInitial: boolean;
  isLoading: boolean;
  isLoggedIn: boolean;
  authToken?: string | null;
  signIn: (data: any) => void;
  signOut: () => void;
  signUp: (data: any) => void;
}

export const AuthContext = createContext<IAuthContext>({
  isLoadingInitial: true,
  isLoading: false,
  isLoggedIn: false,
  authToken: null,
  signIn: (data: any) => {},
  signOut: () => {},
  signUp: (data: any) => {},
});
