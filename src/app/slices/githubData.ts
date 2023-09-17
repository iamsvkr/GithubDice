import { createSlice } from '@reduxjs/toolkit';

export const initialGithubDataState: any = {
  data: [],
};

const githubData= createSlice({
  name: 'githubData',
  initialState: initialGithubDataState,
  reducers: {
    receiveData(state, action) {
      return {
        ...state,
        data: action.payload,
      };
    },

    clearData(state) {
      state.data = [];
    },
  },
});

export const { receiveData, clearData } = githubData.actions;

export default githubData.reducer;
