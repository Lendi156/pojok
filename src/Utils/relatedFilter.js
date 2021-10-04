import { matchSorter } from 'match-sorter';

const relatedFilter = (data, firstTag) => matchSorter(data, firstTag, {
  keys: [{ threshold: matchSorter.rankings.CONTAINS, key: 'tag.*.label' }],
});

export default relatedFilter;
