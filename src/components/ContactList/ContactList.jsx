import styles from './ContactList.module.css';

function ContactList({ contacts, onDelete }) {
  return (
    <ul className={styles.list}>
      {contacts.map((contact) => (
        <li key={contact.id} className={styles.item}>
          <span className={styles.text}>
            {contact.name} {contact.number}
          </span>
          <button 
            onClick={() => onDelete(contact.id)} 
            className={styles.button}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
