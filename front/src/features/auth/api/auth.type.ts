export type RoleType = "admin" | "user";

export interface User {
  id: string;
  email: string;
  role: RoleType;
}
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: User;
}
