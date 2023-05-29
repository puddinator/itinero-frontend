export interface IState {
  isLoadingAuth: boolean;
  isLoggedIn: boolean;
  authToken?: string | null;
}

export interface IAction {
  type: "RESTORE_TOKEN" | "SIGN_IN" | "SIGN_OUT";
  authToken?: string | null;
}

export interface ISignInProps {
  username: string;
  password: string;
}

export interface ISignUpProps extends ISignInProps {
  email?: string;
  image?: string;
}
