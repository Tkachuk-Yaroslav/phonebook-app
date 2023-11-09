import { useEffect, useState } from 'react';
import css from './PhonebookForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { nanoid } from '@reduxjs/toolkit';
import { addContact, fetchContacts } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

const PhonebookForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const nameLabelId = nanoid();
  const numberLabelId = nanoid();

  const handleChanged = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newContact = {
      name,
      number,
    };
    console.log('newContact', newContact);

    const isExistName = contacts.find(el => el.name === name);
    const isExistNumber = contacts.some(el => el.number === number);
    console.log('isExistNumber', isExistNumber);
    if (isExistName || isExistNumber) {
      // Notify.failure(`${name} is already in contacts`);
      toast.error(`${name} is already in contacts`);
    } else {
      dispatch(addContact(newContact));
      toast.success(`Contact ${name} successfully created!`);
    }

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form type="submit" className={css.form} onSubmit={handleSubmit}>
      <label htmlFor={nameLabelId} className={css.nameLabel}>
        Name
        <input
          value={name}
          onChange={handleChanged}
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={nameLabelId}
        />
      </label>

      <label htmlFor={numberLabelId} className={css.telLabel}>
        Number
        <input
          value={number}
          onChange={handleChanged}
          className={css.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id={numberLabelId}
        />
      </label>
      <button className={css.addBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default PhonebookForm;
