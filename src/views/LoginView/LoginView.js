import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import s from './LoginView.module.css';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <form className={s.form} onSubmit={handleSubmit} autoComplete="off">
        <TextField
          className={s.input}
          required
          id="outlined-required"
          label="Email"
          type="email"
          name="email"
          value={email}
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          className={s.input}
          required
          id="outlined-required"
          label="Password"
          type="password"
          name="password"
          value={password}
          variant="outlined"
          onChange={handleChange}
        />
        <Button variant="outlined" color="primary" type="submit">
          Sign in
        </Button>
      </form>
    </div>
  );
}
