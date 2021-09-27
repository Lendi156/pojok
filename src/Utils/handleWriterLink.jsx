import { useDispatch } from 'react-redux';
import { writerFound } from '../Redux/writerFilter';

const useHandleWriterLink = (writer, e) => {
  const dispatch = useDispatch();
  return () => {
    dispatch(writerFound(writer));
    e.stopPropagation();
  };
};

export default useHandleWriterLink;
