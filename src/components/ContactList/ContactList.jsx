import ContactItem from "components/ContactItem/ContactItem";


const ContactList = ({ contacts }) => {

    // const dispatch = useDispatch();

    // const handleDeleteContact = contactId => {
    //     dispatch(deleteContact(contactId));
    // };

    return(
        <ul className={styles.list}>
            {ContactList.map(({ id, name, number }) => {
                <ContactItem
                    key={id}
                    name={name}
                    number={number}
                    onDeleteContact={() => handleDeleteContact(id)}
                />
            }
            )}
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