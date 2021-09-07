import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import operations from '../../redux/contacts/contacts-operations';
import s from './ContactView.module.css';

export default function ContactView() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(operations.fetchContacts()), [dispatch]);

  return (
    <div className={s.cotainer}>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
}
