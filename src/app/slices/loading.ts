import { createSlice } from '@reduxjs/toolkit';

export const initialLoadingState: any = {
  isLoading: false
};

const loading = createSlice({
  name: 'githubData',
  initialState: initialLoadingState,
  reducers: {
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const { setLoading } = loading.actions;

export default loading.reducer;

