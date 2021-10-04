import { matchSorter } from 'match-sorter';
import detail from '../Data/DetailEssayData';

const essayFilter = (essayID) => matchSorter(detail, essayID, {
  keys: [
    { threshold: matchSorter.rankings.CONTAINS, key: 'id' },
  ],
});

export default essayFilter;
