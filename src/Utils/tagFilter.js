import { matchSorter } from 'match-sorter';
import detail from '../Data/DetailEssayData';

const tagFilter = (tagLabel) => matchSorter(detail, tagLabel, { keys: ['tag.*.label'] });

export default tagFilter;
