import {
  type Reducer,
  type AnyAction,
  type CombinedState,
  type EnhancedStore,
  type ReducersMapObject,
} from '@reduxjs/toolkit';
import { type AxiosInstance } from 'axios';
import { type UISchema } from '@/features/UI';
import { type UserSchema } from '@/entities/User';
import { type rtkApi } from '@/shared/api/rtkApi';
import { type LoginSchema } from '@/features/Authentication/model/types/loginSchema';

export interface StateSchema {
  user: UserSchema;
  ui: UISchema;
  login: LoginSchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

  // Async reducers
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  remove: (key: StateSchemaKey) => void;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  state: StateSchema;
  extra: ThunkExtraArg;
}
