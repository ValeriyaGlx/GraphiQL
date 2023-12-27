import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../store';
import prettifyingService from '../../services/PrettifyingService';

type UserState = {
  ResponseData: string;
};

const initialState: UserState = {
  ResponseData: '',
};

const responseDataSlice = createSlice({
  name: 'responseData',
  initialState,
  reducers: {
    updateResponseData: (state, action: PayloadAction<string>) => {
      state.ResponseData = prettifyingService.formatJSON(action.payload);
    },
  },
});

export const selectResponseData = (state: RootState) => state.responseData.ResponseData;

export const { updateResponseData } = responseDataSlice.actions;
export const responseReducer = responseDataSlice.reducer;
