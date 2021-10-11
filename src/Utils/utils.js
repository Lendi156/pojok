/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { matchSorter } from 'match-sorter';
import { clearChip, tagFound, toggleChip } from '../Redux/tagFilter';
import detail from '../Data/DetailEssayData';
import {
  addComment, addLike, saveLike, saveComment,
} from '../Redux/likeandComment';
import { idFound } from '../Redux/openEssay';
import { writerFound } from '../Redux/writerFilter';
import { essayFound, displayingResult } from '../Redux/searchEssay';

export const clearTagData = () => {
  const dispatch = useDispatch();
  if ((useLocation().pathname) !== '/Filter') {
    dispatch(clearChip());
  }
};

// save label value to redux store and go to filter page
export const tagClick = (dispatch, label, history) => {
  dispatch(tagFound(label));
  history.push('/Filter');
};

// save label value to the store to change data source status
export const handleToggle = (dispatch, id) => {
  dispatch(toggleChip(id));
};

export const enterPressed = (event, SearchArticle, keyWord, dispatch, history) => {
  const key = event.keyCode || event.which;
  if (key === 13) {
    SearchArticle(keyWord.current.value, dispatch, history);
    // eslint-disable-next-line no-param-reassign
    keyWord.current.value = '';
  }
};

export const essayFilter = (essayID) => matchSorter(detail, essayID, {
  keys: [
    { threshold: matchSorter.rankings.CONTAINS, key: 'id' },
  ],
});

// get id of card post to be save in redux store
export const getId = (dispatch, id) => {
  dispatch(idFound(id));
};

// save writer data to redux store and stop link propagation
export const handleWriterLink = (writer, e, dispatch) => {
  dispatch(writerFound(writer));
  e.stopPropagation();
};

// limit essays loaded per page(5 essays)
export const loopWithSlice = (start, end, data, postsToShow, setPostsToShow) => {
  const slicedPosts = data.slice(start, end);
  setPostsToShow([...postsToShow, ...slicedPosts]);
};

// view 5 more post
export function handleShowMorePosts(
  next,
  setNext,
  postsPerPage,
  data,
  postsToShow,
  setPostsToShow,
) {
  loopWithSlice(next, next + postsPerPage, data, postsToShow, setPostsToShow);
  setNext(next + postsPerPage);
}

export const mediaQuery = (media, small, large) => {
  if (media === true) {
    return small;
  }
  return large;
};

export const relatedFilter = (data, firstTag) => matchSorter(data, firstTag, {
  keys: [{ threshold: matchSorter.rankings.CONTAINS, key: 'tag.*.label' }],
});

export const searchFilter = (keyword) => matchSorter(detail, keyword, {
  keys: [
    { threshold: matchSorter.rankings.CONTAINS, key: 'tag.*.label' },
    { threshold: matchSorter.rankings.CONTAINS, key: 'writer' },
    { threshold: matchSorter.rankings.CONTAINS, key: 'title' },
    { threshold: matchSorter.rankings.CONTAINS, key: 'essay' },
    { threshold: matchSorter.rankings.CONTAINS, key: 'summary' },
  ],
});

export const tagFilter = (tagLabel) => matchSorter(detail, tagLabel, {
  keys: [{ threshold: matchSorter.rankings.CONTAINS, key: 'tag.*.label' }],
});

export const writeFilter = (writerName) => matchSorter(detail, writerName, {
  keys: [{ threshold: matchSorter.rankings.CONTAINS, key: 'writer' }],
});

// get comment data, save new comment to redux store, and clear input field
export const commentAdded = (dispatch, commentName, commentFill) => {
  const newComment = {
    name: commentName,
    fill: commentFill,
  };
  dispatch(addComment(newComment));
  commentName = '';
  commentFill = '';
};

// go to essay page
export const cardLink = (history) => {
  history.push('/Essay');
};

// get input value from valueRev, save the value to redux store, and go to search page
export const SearchArticle = async (input, dispatch, history) => {
  const keyword = input;
  const filteredEssays = searchFilter(keyword);
  await dispatch(essayFound(filteredEssays));
  await dispatch(displayingResult(keyword));
  history.push('/Search');
};

export const searchButtonToggle = (setMobile) => {
  setMobile(true);
};
export const handleClickAway = (setMobile) => {
  setMobile(false);
};

// add +1 like to the reducx store
export const likeAdded = (dispatch) => {
  dispatch(addLike());
};

// add +1 like to the reducx store
export const savingLikeAndComment = (dispatch, savingLike, savingComment) => {
  dispatch(saveLike(savingLike));
  dispatch(saveComment(savingComment));
};
