import ContactItem from "components/ContactItem/ContactItem";
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import { useDispatch } from "react-redux";
import { deleteContact } from "./../../redux/operations";
import React from "react";

const ContactList = ({ contacts }) => {

    const dispatch = useDispatch();

    const handleDeleteContact = contactId => {
        dispatch(deleteContact(contactId));
    };

    return(
        <ul className={styles.list}>
            {contacts.map(({ id, name, number }) => (
                <ContactItem
                    key={id}
                    name={name}
                    number={number}
                    onDeleteContact={() => handleDeleteContact(id)}
                />
            ))}
        </ul>
    );
};


ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;