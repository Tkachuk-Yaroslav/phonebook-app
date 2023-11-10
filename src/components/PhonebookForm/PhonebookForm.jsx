import * as yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Box, Button } from '@mui/material';
import { addContact } from '../../redux/contacts/operations';
import { selectContactItem } from 'redux/selectors';
import createToast from 'utils/toast';

const validationSchema = yup.object({
  name: yup
    .string('Enter contact name')
    .required('Name is required')
    .max(16, 'Max 16 characters for the name')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([ ' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name contains invalid characters'
    ),
  number: yup
    .string('Enter contact number')
    .required('Contact number is required')
    .max(20, 'Max 20 characters for the number')
    .matches(
      /\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}/,
      'Invalid phone number format.'
    ),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactItem);

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      const isExistName = contacts.find(el => el.name === values.name);
      const isExistNumber = contacts.some(el => el.number === values.number);

      if (isExistName || isExistNumber) {
        const message = `${values.name} is already in contacts`;
        createToast('error', message);
      } else {
        dispatch(addContact(values));

        const message = `Contact ${values.name} successfully created!`;
        createToast('success', message);
      }
      formik.resetForm();
    },
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit}>
      <TextField
        required
        fullWidth
        autoComplete="name"
        id="name"
        name="name"
        label="Contact Name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
        sx={{ mb: 2 }}
      />
      <TextField
        required
        fullWidth
        autoComplete="number"
        id="number"
        name="number"
        label="Phone Number"
        value={formik.values.number}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.number && Boolean(formik.errors.number)}
        helperText={formik.touched.number && formik.errors.number}
        sx={{ mb: 2 }}
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Add contact
      </Button>
    </Box>
  );
};

export default ContactForm;
