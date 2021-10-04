import { matchSorter } from 'match-sorter';
import detail from '../Data/DetailEssayData';

const writeFilter = (writerName) => matchSorter(detail, writerName, {
  keys: [{ threshold: matchSorter.rankings.CONTAINS, key: 'writer' }],
});

export default writeFilter;
