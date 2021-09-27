import { matchSorter } from 'match-sorter';
import detail from '../Data/DetailEssayData';

const writeFilter = (writerName) => matchSorter(detail, writerName, { keys: ['writer'] });

export default writeFilter;
