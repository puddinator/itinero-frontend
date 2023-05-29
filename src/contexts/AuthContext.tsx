import { createContext } from "react";

interface IAuthContext {
  isLoadingAuth: boolean,
  isLoggedIn: boolean,
  authToken?: string | null,
  signIn: (data: any) => void,
  signOut: () => void,
  signUp: (data: any) => void,
}

export const AuthContext = createContext<IAuthContext>({
  isLoadingAuth: true,
  isLoggedIn: false,
  authToken: null,
  signIn: (data: any) => {console.log(data)},
  signOut: () => {},
  signUp: (data: any) => {},
});
