import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../store';

type EndpointState = {
  endpoint: string;
};

const initialState: EndpointState = {
  endpoint: 'https://swapi-graphql.eskerda.vercel.app',
};

const endpointSlice = createSlice({
  name: 'endpoint',
  initialState,
  reducers: {
    updateEndpointData: (state, action: PayloadAction<string>) => {
      state.endpoint = action.payload;
    },
  },
});

export const selectEndpointData = (state: RootState) => state.endpoint.endpoint;

export const { updateEndpointData } = endpointSlice.actions;
export const endpointReducer = endpointSlice.reducer;
