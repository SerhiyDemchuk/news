import { type StateSchema } from '@/app/providers/StoreProvider';

export const getIsAuthenticated = (state: StateSchema) =>
  state.auth.isAuthenticated;
