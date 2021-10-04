import { matchSorter } from 'match-sorter';
import detail from '../Data/DetailEssayData';

const searchFilter = (keyword) => matchSorter(detail, keyword, {
  keys: [
    { threshold: matchSorter.rankings.CONTAINS, key: 'tag.*.label' },
    { threshold: matchSorter.rankings.CONTAINS, key: 'writer' },
    { threshold: matchSorter.rankings.CONTAINS, key: 'title' },
    { threshold: matchSorter.rankings.CONTAINS, key: 'essay' },
    { threshold: matchSorter.rankings.CONTAINS, key: 'summary' },
  ],
});

export default searchFilter;
