import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import operations from '../../redux/contacts/contacts-operations';
import { getContacts } from '../../redux/contacts/contacts-selectors';
import css from './ContactForm.module.css';
import Button from '@material-ui/core/Button';
//import TextField from '@material-ui/core/TextField';
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
        <label className={css.formLabel}>
          <input
            placeholder="Name"
            label="Name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="The name can only consist of letters, apostrophes, dashes and spaces. For example, Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan etc."
            required
            className={css.input}
            value={name}
            onChange={handleNameChange}
          />
        </label>

        <label className={css.formLabel}>
          <input
            placeholder="Number"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            className={css.input}
            value={number}
            onChange={handleNumberChange}
          />
        </label>
        {/* <TextField
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
        /> */}
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
