import styles from "./ContactList.module.css";

function ContactList({ contacts, onDelete }) {
  if (contacts.length === 0) {
    return <p className={styles.empty}>No contacts found</p>;
  }

  return (
    <ul className={styles.list}>
      {contacts.map((contact) => (
        <li key={contact.id} className={styles.item}>
          <span className={styles.name}>{contact.name}</span>
          <span className={styles.number}>{contact.number}</span>
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