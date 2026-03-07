export interface IRegisterCredentials {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
}

export interface ILoginCredentials {
  email: string;
  password: string;
}

export interface IForgetPassword {
  email: string;
}
