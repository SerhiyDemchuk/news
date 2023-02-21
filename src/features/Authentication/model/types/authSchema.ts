export interface Credentials {
  username: string;
  password: string;
}
export interface AuthSchema {
  isAuthenticated: boolean;
  credentials: Credentials | null;
}
