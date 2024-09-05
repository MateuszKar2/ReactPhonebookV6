import React from "react";
import PropTypes from 'prop-types';
import styles from './ContactItem.module.css';

const ContactItem = ({ id, name, number, onDeleteContact}) => {


    return(
        <li className={styles.item} key={id}>
            {name} : {number}
            <button className={styles.button} type="button" onClick={() => onDeleteContact({id})}>Delete</button>
        </li>
    )
}

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;