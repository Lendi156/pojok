/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';

export const likeandCommentSlice = createSlice({
  name: 'likeandComment',
  initialState: {
    like: '',
    comment: [],
  },
  reducers: {
    saveLike: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.like = action.payload;
      return state;
    },
    saveComment: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.comment = action.payload;
      return state;
    },
    addLike: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.like += 1;
      return state;
    },
    // eslint-disable-next-line no-unused-vars
    addComment: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.comment = [...state.comment, action.payload];
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  saveLike, saveComment, addLike, addComment,
} = likeandCommentSlice.actions;

export default likeandCommentSlice.reducer;
