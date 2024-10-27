interface IUserResponse {
  _id: string;
  name: string;
  email: string;
  role: string;
  cartItems: [];
}

export interface ISignInResponse {
  success: true;
  message: string;
  data: IUserResponse;
}

export interface IVerifyAuthResponse {
  success: true;
  data: IUserResponse;
}

export interface ISignUpResponse {
  success: true;
  message: string;
  data: IUserResponse;
}
