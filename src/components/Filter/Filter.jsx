import { OutlinedInput } from '@mui/material';
import { useDispatch } from 'react-redux';
import { search } from 'redux/filter/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleInputChange = event => {
    const newValue = event.target.value;
    dispatch(search(newValue));
  };

  return (
    <OutlinedInput
      fullWidth
      type="text"
      name="filter"
      placeholder="Search by name"
      onChange={handleInputChange}
    />
  );
};

export default Filter;
