import { createSlice } from '@reduxjs/toolkit';

export const searchEssaySlice = createSlice({
  name: 'search',
  initialState: {
    keyword: '',
    list: [],
  },
  reducers: {
    essayFound: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.list.length = 0;
      action.payload.forEach((essay) => {
        state.list.push(essay);
      });
    },
    displayingResult: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.keyword = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { essayFound, displayingResult } = searchEssaySlice.actions;

export default searchEssaySlice.reducer;
