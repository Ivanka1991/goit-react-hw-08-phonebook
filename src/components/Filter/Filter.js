import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/contacts/contacts-actions';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import TextField from '@material-ui/core/TextField';
import css from './Filter.module.css';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <div className={css.container}>
      <TextField
        id="outlined-search"
        type="search"
        label="Find contacts by name"
        variant="outlined"
        name="name"
        className={css.input}
        value={value}
        onChange={e => dispatch(actions.changeFilter(e.target.value))}
      />
    </div>
  );
};

export default Filter;
