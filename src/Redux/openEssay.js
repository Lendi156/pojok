import { createSlice } from '@reduxjs/toolkit';

export const openEssaySlice = createSlice({
  name: 'open',
  initialState: {
    id: '',
  },
  reducers: {
    idFound: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.id = action.payload;
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { idFound } = openEssaySlice.actions;

export default openEssaySlice.reducer;
