import { useSelector } from 'react-redux';

const searchResult = useSelector((state) => state.search.list);

export default searchResult;
