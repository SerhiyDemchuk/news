import { type PayloadAction } from '@reduxjs/toolkit';
import { buildSlice } from '@/shared/store';
import {
  type AuthSchema,
  type Credentials,
} from '@/features/Authentication/model/types/authSchema';

const initialState: AuthSchema = {
  isAuthenticated: !!localStorage.getItem('auth') || false,
  credentials: null,
};

const authSlice = buildSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<Credentials>) {
      state.isAuthenticated = true;
      state.credentials = action.payload;
      localStorage.setItem('auth', 'true');
    },
    logout(state, action: PayloadAction) {
      state.isAuthenticated = false;
      state.credentials = null;
      localStorage.removeItem('auth');
    },
  },
});

export const {
  actions: authActions,
  reducer: authReducer,
  useActions: useAuthActions,
} = authSlice;
