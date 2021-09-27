/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';

export const writerFilterSlice = createSlice({
  name: 'writerFilter',
  initialState: {
    writer: '',
  },
  reducers: {
    writerFound: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.writer = action.payload;
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { writerFound } = writerFilterSlice.actions;

export default writerFilterSlice.reducer;
