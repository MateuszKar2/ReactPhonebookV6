import ContactForm from "components/ContactForm/ContactForm";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";



const Phonebook = () => {

    return(
        <div>
            <h1 className={styles.title}>Phonebook</h1>

            <ContactForm onSubmit={handleAddContact}/>

            <h2 className={styles.subtitle}>Contacts</h2>

            <Filter value={filter} onChangeFilter={handleChangeFilter}/>

            <ContactList contacts={filteredContacts} onDeleteContacts={handleDeleteContacts}/>

        </div>
    )
}

export default Phonebook;