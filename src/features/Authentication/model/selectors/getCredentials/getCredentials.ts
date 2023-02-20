import { type StateSchema } from '@/app/providers/StoreProvider';

export const getCredentials = (state: StateSchema) => state.login.credentials;
