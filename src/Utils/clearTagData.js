import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearChip } from '../Redux/tagFilter';

const clearTagData = () => {
  const dispatch = useDispatch();
  if ((useLocation().pathname) !== '/Filter') {
    dispatch(clearChip());
  }
};

export default clearTagData;
