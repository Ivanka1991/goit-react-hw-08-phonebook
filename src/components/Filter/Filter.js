import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/contacts/contacts-actions';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import css from './Filter.module.css';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <div className={css.filter}>
      <span className={css.title}> Find contacts by name</span>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={e => dispatch(actions.changeFilter(e.target.value))}
      />
    </div>
  );
};

export default Filter;
