// import { useState, useEffect } from 'react';
// import shortid from 'shortid';
// import ContactForm from './components/ContactForm/contactForm';
// import ContactList from './components/ContactList/contactList';
// import Filter from './components/Filter/filter';
// import './app.css';

// // const initialContacts = [
// //       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
// //       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
// //       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
// //       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// //     ]

// export default function App() {
//   const [contacts, setContacts] = useState(() => {
//     return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
//   });
//   const [filter, setFilter] = useState('');

//   useEffect(() => {
//     window.localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]);

//   const addContact = (name, number) => {
//     if (name === '') {
//       alert(`Введите, пожалуйста, имя контакта.`);
//       return;
//     }

//     if (number === '') {
//       alert(`Введите, пожалуйста, номер телефона контакта.`);
//       return;
//     }

//     if (contacts.find(contact => contact.name === name)) {
//       alert(`${name} is already in contacts.`);
//       return;
//     }

//     const newContact = {
//       id: shortid.generate(),
//       name,
//       number,
//     };

//     setContacts(prevContacts => [newContact, ...prevContacts]);
//   };

//   const changeFilter = ({ target }) => {
//     setFilter(target.value);
//   };

//   const getVisibleContacts = () => {
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter),
//     );
//   };

//   const deleteContact = contactId => {
//     setContacts(contacts.filter(contact => contact.id !== contactId));
//   };

//   return (
//     <>
//       <h1>Phonebook</h1>
//       <ContactForm onSubmit={addContact} />
//       <h2>Contacts</h2>
//       <Filter value={filter} onChange={changeFilter} />
//       <ContactList
//         contacts={getVisibleContacts()}
//         onDeleteContact={deleteContact}
//       />
//     </>
//   );

// import React from 'react';
// import PropTypes from 'prop-types';
// import s from './filter.module.css';

// const Filter = ({ value, onChange }) => (
//   <label className={s.filterLabel}>
//     Find contacts by name
//     <input
//       className={s.filterInput}
//       type="text"
//       value={value}
//       onChange={onChange}
//     />
//   </label>
// );

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

// export default Filter;

// import { useState } from 'react';
// import shortid from 'shortid';
// import s from './form.module.css';

// export default function ContactForm({ onSubmit }) {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   const handleChange = e => {
//     const { name, value } = e.currentTarget;

//     switch (name) {
//       case 'name':
//         setName(value);
//         break;

//         case 'number':
//         setNumber(value);
//         break;

//         default:
//         return;
//     }
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     onSubmit(name, number);
//     reset();
//   };

//   const reset = () => {
//     setName('');
//     setNumber('');
//   };

//   return (
//     <form className={s.form} onSubmit={handleSubmit}>
//       <label className={s.label} htmlFor={contactNameId}>
//         Name
//         <input
//           className={s.input}
//           type="text"
//           name="name"
//           value={name}
//           onChange={handleChange}
//           id={contactNameId}
//         />
//       </label>
//       <label className={s.label} htmlFor={contactNumberId}>
//         Number
//         <input
//           className={s.input}
//           type="text"
//           name="number"
//           value={number}
//           onChange={handleChange}
//           id={contactNumberId}
//         />
//       </label>

//       <button className={s.button} type="submit">
//         Add contact
//       </button>
//     </form>
//   );
// }

// import React from 'react';
// import PropTypes from 'prop-types';
// import s from './contactList.module.css';

// export default function ContactList({ contacts, onDeleteContact }) {
//   return (
//     <ul className={s.list}>
//       {contacts.map(({ id, name, number }) => (
//         <li className={s.listItem} key={id}>
//           <span className={s.listItemText}>{name}</span>
//           <span className={s.listItemText}>{number}</span>
//           <button
//             className={s.button}
//             type="button"
//             onClick={() => onDeleteContact(id)}
//           >
//             Delete
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// }

// ContactList.propTypes = {
//   contacts: PropTypes.array,
//   id: PropTypes.string,
//   name: PropTypes.string,
//   number: PropTypes.string,
//   onDeleteContact: PropTypes.func.isRequired,
// };
