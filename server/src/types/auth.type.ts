export interface IAuthResponse {
  tokens: {
    access: string;
    refresh: string;
  } | null;
  errors: { message: string }[];
}

export interface ISignUp {
  username: string;
  phone: string;
  password: string;
  userType: 'ADMIN' | 'CUSTOMER' | 'DESIGNER';
}

export interface ISignIn {
  username: string;
  password: string;
}

export interface ISignOut {
  refreshToken: string;
}
