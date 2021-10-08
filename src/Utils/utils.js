/* eslint-disable import/prefer-default-export */
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { matchSorter } from 'match-sorter';
import { clearChip } from '../Redux/tagFilter';
import detail from '../Data/DetailEssayData';
import { idFound } from '../Redux/openEssay';
import { writerFound } from '../Redux/writerFilter';

export const clearTagData = () => {
  const dispatch = useDispatch();
  if ((useLocation().pathname) !== '/Filter') {
    dispatch(clearChip());
  }
};

export const enterPressed = (event, SearchArticle, keyWord) => {
  const key = event.keyCode || event.which;
  if (key === 13) {
    SearchArticle(keyWord.current.value);
    // eslint-disable-next-line no-param-reassign
    keyWord.current.value = '';
  }
};

export const essayFilter = (essayID) => matchSorter(detail, essayID, {
  keys: [
    { threshold: matchSorter.rankings.CONTAINS, key: 'id' },
  ],
});

export const getId = (dispatch, id) => {
  dispatch(idFound(id));
};

export const handleWriterLink = (writer, e, dispatch) => {
  dispatch(writerFound(writer));
  e.stopPropagation();
};

export const loopWithSlice = (start, end, data, postsToShow, setPostsToShow) => {
  const slicedPosts = data.slice(start, end);
  setPostsToShow([...postsToShow, ...slicedPosts]);
};

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
