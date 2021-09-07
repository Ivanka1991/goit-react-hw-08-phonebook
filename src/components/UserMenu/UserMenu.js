import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import Button from '@material-ui/core/Button';
import avatar from './img/avatar.jpg';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <div>
      <img src={avatar} alt={avatar} width="32" />
      <span>Welcome,{name}</span>
      <Button
        variant="outlined"
        size="small"
        color="primary"
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Logout
      </Button>
    </div>
  );
}
