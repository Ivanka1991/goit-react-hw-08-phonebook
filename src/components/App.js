//import { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
//import { v4 as uuidv4 } from 'uuid';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import s from '../components/App.module.css';

export default function App() {
  // const [contacts, setContacts] = useState(() => {
  //   return (
  //     JSON.parse(window.localStorage.getItem('contacts')) ?? [
  //       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //     ]
  //   );
  // });
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const formSubmitHandler = ({ name, number }) => {
  //   if (!name || !number) return;

  //   const contactNames = contacts.map(contact => contact.name.toLowerCase());
  //   if (contactNames.includes(name.toLowerCase())) {
  //     alert(`${name} is already in contacts.`);
  //     return;
  //   }
  //   const contact = {
  //     id: uuidv4(),
  //     name,
  //     number,
  //   };
  //   setContacts(prevState => {
  //     return [...prevState, contact];
  //   });
  // };

  // const changeFilter = e => {
  //   setFilter(e.target.value);
  // };
  // const getVisibleContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter),
  //   );
  // };

  // const removeContact = contactId => {
  //   setContacts(prevState =>
  //     prevState.filter(contact => contact.id !== contactId),
  //   );
  // };

  return (
    <div className={s.box}>
      <h2 className={s.title}>Phonebook</h2>
      <ContactForm />
      <h2 className={s.title}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
