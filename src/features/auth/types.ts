export interface SignupPayload {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  termsConditions: boolean;
  newsletter?: boolean;
}
