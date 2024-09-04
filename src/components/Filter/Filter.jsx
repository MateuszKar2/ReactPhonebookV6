import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';
// import {setFilter} from './'
import {useDispatch, useSelector} from 'react-redux';

const Filter = () => {

    const filter = useSelector(state => state.filter);
    // const dispatch = useDispatch();

    const handleChangeFilter = e => {
        dispatch(setFilter(e.target.value))
    }

    return(
        <div>
            <label className={styles.label}>
                Find contats by name:
                <input className={styles.input} type="text" value={filter} onChange={handleChangeFilter}/>
            </label>
        </div>
    )
};

    Filter.propTypes = {
        value: PropTypes.string.isRequired,
        onChangeFilter: PropTypes.func.isRequired,
    };

export default Filter;