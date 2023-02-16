import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(4),
  },
  textField: {
    margin: theme.spacing(1),
    width: "100%",
  },
  button: {
    margin: theme.spacing(2),
  },
}));

const SignUp = () => {
  const classes = useStyles();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      history.push("/dashboard");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className={classes.root}>
      <form onSubmit={handleSignUp}>
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
        <TextField
          label="Confirm Password"
          variant="outlined"
          className={classes.textField}
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          type="password"
        />
        {error && <p>{error}</p>}
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={classes.button}
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
