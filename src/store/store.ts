import { configureStore } from '@reduxjs/toolkit';

import { userReducer } from './slices/userSlice';
import { responseReducer } from './slices/responseSlice';
import { requestReducer } from './slices/requestSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    responseData: responseReducer,
    requestData: requestReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
