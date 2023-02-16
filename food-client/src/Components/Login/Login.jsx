import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(4),
  },
  textField: {
    margin: theme.spacing(1),
    width: '100%',
  },
  button: {
    margin: theme.spacing(2),
  },
}));

const Login = () => {
  const classes = useStyles();
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      history.push('/dashboard');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className={classes.root}>
      <form onSubmit={handleLogin}>
        <TextField
          label="Email"
          variant="outlined"
          className={classes.textField}
          value={email}
          onChange={handleEmailChange}
        />
        <TextField
          label="Password"
          variant="outlined"
          className={classes.textField}
          value={password}
          onChange={handlePasswordChange}
          type="password"
        />
        {error && <p>{error}</p>}
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={classes.button}
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
