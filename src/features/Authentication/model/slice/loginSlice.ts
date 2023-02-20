import { type PayloadAction } from '@reduxjs/toolkit';
import { buildSlice } from '@/shared/store';
import { type Credentials, type LoginSchema } from '../types/loginSchema';
import { loginByUsername } from '@/features/Authentication/model/services/loginByUsername/loginByUsername';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';

const initialState: LoginSchema = {
  isLoading: false,
  credentials: {
    username: '',
    password: '',
  },
};

export const loginSlice = buildSlice({
  name: 'login',
  initialState,
  reducers: {
    setLoginCredentials: (
      state: LoginSchema,
      action: PayloadAction<Credentials>,
    ) => {
      state.credentials = action.payload;
      localStorage.setItem(USER_LOCALSTORAGE_KEY, 'true');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByUsername.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(loginByUsername.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(loginByUsername.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  actions: loginActions,
  reducer: loginReducer,
  useActions: useLoginActions,
} = loginSlice;
