import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';

import React from 'react';
import { search } from 'redux/filter/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  return (
    <div>
      <label htmlFor="filterInput" className={css.label}>
        &#128270; Find contacts by name &#128269;
        <input
          type="text"
          className={css.input}
          id="filterInput"
          value={filter}
          onChange={evt => dispatch(search(evt.currentTarget.value))}
        />
      </label>
    </div>
  );
};

export default Filter;
