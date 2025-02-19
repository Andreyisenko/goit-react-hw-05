import { Field, Formik, Form } from 'formik';
import css from './SearchBar.module.css';
const SearchBar = ({ handleChangeQuery }) => {
  const onSubmit = values => {
    // console.log(values);
    handleChangeQuery(values.query);
  };
  const initialValues = {
    query: '',
  };
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form className={css.forma}>
        <Field className={css.fielD} name="query" />
        <button className={css.btn} type="submit">
          Search
        </button>
      </Form>
    </Formik>
  );
};

export default SearchBar;
