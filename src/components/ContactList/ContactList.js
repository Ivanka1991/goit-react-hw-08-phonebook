import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import css from './ContactList.module.css';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';
import operations from '../../redux/contacts/contacts-operations';
//import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
function ContactList() {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => dispatch(operations.fetchContacts()), [dispatch]);
  const onDeleteContact = id => dispatch(operations.deleteContact(id));
  return (
    <div className={css.container}>
      <ul className={css.list}>
        {contacts.map(({ id, name, number }) => {
          return (
            <li key={id} className={css.list__item}>
              <span className={css.name}>{name}</span>
              <span className={css.number}>{number}</span>
              <Button
                className={css.deleteBtn}
                variant="outlined"
                color="default"
                size="small"
                startIcon={<DeleteIcon style={{ fontSize: 14 }} />}
                onClick={() => onDeleteContact(id)}
              >
                Delete
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ContactList;
