import styles from './ContactForm.module.css';
import { useId} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialFormValues = {
  name: '',
  number: '',
};

const formSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()  
    .matches(/^[0-9]+$/, 'Invalid phone number')
    .required('Required'),
});

const ContactForm = ({ onSubmit }) => {
  const nameId = useId();
  const numberId = useId();
  return (
    <Formik
      initialValues={initialFormValues}
      validationSchema={formSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      <Form className={styles.form}>
        <label htmlFor={nameId} className={styles.label}>
          Name
          <Field
            type="text"
            name="name"
            id={nameId}
            className={styles.input}
          />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </label>
        <label htmlFor={numberId} className={styles.label}>
          Number
          <Field
            type="tel"  
            name="number"
            id={numberId}
            className={styles.input}
          />
          <ErrorMessage name="number" component="div" className={styles.error} />
        </label>
        <button type="submit" className={styles.button}>
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
