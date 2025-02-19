import { Field, Formik, Form } from 'formik';

const SearchBar = ({handleChangeQuery}) => {
  const onSubmit = values => {
    // console.log(values);
    handleChangeQuery(values.query)
  };
  const initialValues = {
    query: '',
  };
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <Field name="query" />
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
};

export default SearchBar;
