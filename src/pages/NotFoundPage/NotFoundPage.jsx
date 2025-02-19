import { NavLink } from 'react-router-dom';
import css from './NotFoundPage.module.css';
const NotFoundPage = () => {
  return (
    <div>
      <h2 className={css.title}>Not Found Page...</h2>
      <NavLink className={css.back} to="/">
        {`<< Go back`}
      </NavLink>
    </div>
  );
};

export default NotFoundPage;
