import {configureStore} from '@reduxjs/toolkit';

import loginSliceReducer from '../features/loginSlice';

export const store = configureStore({
  reducer: {
    allloginData: loginSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
