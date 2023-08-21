import { useDispatch, useSelector } from 'react-redux';

// import PropTypes from 'prop-types';
import { setFilter } from 'redux/filters/slice';
import { getFilterValue } from 'redux/selectors';

import css from './Filter.module.css';

const Filter = () => {
    const filter = useSelector(getFilterValue);
    const dispatch = useDispatch()
    

    const handleFilter = e => dispatch(setFilter(e.target.value));

    return (
        <label className={css.label}>
            Find contacts by name :
            <input
                className={css.input}
                type="text"
                value={filter}
                onChange={handleFilter}
            />
        </label>
    )
}

export default Filter;