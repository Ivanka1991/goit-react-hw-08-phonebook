import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import css from './ContactList.module.css';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';
import operations from '../../redux/contacts/contacts-operations';

function ContactList() {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => dispatch(operations.fetchContacts()), [dispatch]);
  const onDeleteContact = id => dispatch(operations.deleteContact(id));
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={css.list__item}>
            <span className={css.name}>{name}</span>
            <span className={css.number}>{number}</span>
            <button
              className={css.deleteBtn}
              type="button"
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default ContactList;
