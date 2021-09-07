import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import operations from '../../redux/contacts/contacts-operations';
import { getContacts } from '../../redux/contacts/contacts-selectors';
import css from './ContactForm.module.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleNameChange = e => {
    setName(e.target.value);
  };
  const handleNumberChange = e => {
    setNumber(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!name || !number) return;

    const contactNames = contacts.map(contact => contact.name.toLowerCase());
    if (contactNames.includes(name.toLowerCase())) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(operations.addContact(name, number));

    setName('');
    setNumber('');
  };

  return (
    <div className={css.container}>
      <form className={css.form} onSubmit={handleSubmit}>
        <TextField
          className={css.input}
          id="standard-basic"
          label="Name"
          value={name}
          onChange={handleNameChange}
          type="text"
          name="name"
        />
        <TextField
          className={css.input}
          id="standard-basic"
          label="Number"
          value={number}
          onChange={handleNumberChange}
          type="tel"
          name="number"
        />
        <Button
          variant="outlined"
          color="primary"
          size="small"
          type="submit"
          className={css.btn}
          startIcon={<SaveIcon />}
        >
          Add contact
        </Button>
      </form>
    </div>
  );
}
export default ContactForm;
