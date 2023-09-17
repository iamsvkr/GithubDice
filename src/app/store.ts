import { configureStore, ThunkAction, Action, Middleware, PreloadedState, StateFromReducersMapObject } from '@reduxjs/toolkit';

import githubData from './slices/githubData';
import loading from './slices/loading';

const reducer = {
  githubData,
  loading,
};

export type RootState = StateFromReducersMapObject<typeof reducer>;

export function configureAppStore(preloadedState?: PreloadedState<RootState>) {
  const middlewares: Middleware[] = [];

  return configureStore({
    reducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(middlewares),
    preloadedState,
  });
}

export const store = configureAppStore();

export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
