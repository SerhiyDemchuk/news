export interface Credentials {
  username: string;
  password: string;
}

export interface LoginSchema {
  error?: string;
  credentials: Credentials;
  isLoading: boolean;
}
