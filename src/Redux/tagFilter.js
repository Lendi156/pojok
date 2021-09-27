/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';
import topics from '../Data/TopicData';

export const tagFilterSlice = createSlice({
  name: 'tagFilter',
  initialState: {
    label: '',
    tags: topics,
  },
  reducers: {
    tagFound: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.label = action.payload;
      return state;
    },
    saveLabel: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.tags = action.payload;
    },
    toggleChip: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      const objIndex = state.tags.findIndex(((topic) => topic.label === action.payload));
      if (!state.tags[objIndex].status) {
        state.tags.forEach((topic) => topic.status = false);
        state.tags[objIndex].status = !state.tags[objIndex].status;
      }

      return state;
    },
    clearChip: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.tags.forEach((topic) => topic.status = false);
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  tagFound, saveLabel, toggleChip, clearChip,
} = tagFilterSlice.actions;

export default tagFilterSlice.reducer;
