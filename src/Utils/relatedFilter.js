import { matchSorter } from 'match-sorter';

const relatedFilter = (data, firstTag) => matchSorter(data, firstTag, { keys: ['tag.*.label'] });

export default relatedFilter;
