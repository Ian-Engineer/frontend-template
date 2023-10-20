import { Collapse, Paper, Typography } from "@mui/material";
import InputForm from "../../_components/InputForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../api";
import { useDispatch } from "react-redux";
import { setUser } from "../../../config/userSlice";
import StyledButton from '../../_components/StyledButton';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState(0);
  const [passwordError, setPasswordError] = useState(0);
  const [confirmPasswordError, setConfirmPasswordError] = useState(0);
  const [registerError, setRegisterError] = useState("");

  const navigate = useNavigate();

  const createAccount = () => {
    let error = false;
    setEmailError(0);
    setPasswordError(0);
    setConfirmPasswordError('');
    // make sure email and password have values entered
    if (email.indexOf("@") < 0 || email.indexOf(".") < 0) {
      setEmailError('Incorrect email format.');
      error = true;
    }
    if (!email.length) {
      setEmailError('Please inpuit your email.');
      error = true;
    }
    if (password.length < 8) {
      setPasswordError('Password must exceed 8 characters.');
      error = true;
    }
    if (confirmPassword !== password) {
      setConfirmPasswordError('Password do not match.');
      error = true;
    }

    if (!error) {
      // no error in inputs
      // make api call
        api.postRequest('/api/signup', { email, password })
        .then((response) => {
          if (response.error) {
            // set login error
            setRegisterError(response.message);
          } else {
            setRegisterError("");
            dispatch(setUser(response.data));
            navigate('/')
          }
        });
    }
  };

  return (
    <Paper className="min-w-full max-w-fit h-fit p-5 m-auto flex flex-col justify-center align-center items-center">
      <Typography
        className="pb-5 h-fit"
        variant="h5"
        sx={{ fontWeight: "bold" }}
      >
        Register
      </Typography>
      <div className="flex flex-col items-center">
        <Typography>{registerError}</Typography>
        <InputForm
          placeholder={"Email"}
          input={email}
          setInput={setEmail}
          required={true}
          error={emailError}
          ariaLabel="input email"
          autoComplete={'email'}
        />
        <InputForm
          placeholder={"Password"}
          input={password}
          setInput={setPassword}
          required={true}
          error={passwordError}
          ariaLabel="input password"
          autoComplete={'new-password'}
        />
        <InputForm
          placeholder={"Confirm Password"}
          input={confirmPassword}
          setInput={setConfirmPassword}
          required={true}
          error={confirmPasswordError}
          ariaLabel="confirm password"
          autoComplete={'new-password'}
        />
        <div className="h-2" />
        <StyledButton buttonText={"Continue"} handleClick={createAccount} ariaLabel="submit"/>
        <div className="h-5" />
        <Typography>
          Already have an account?
        </Typography>
        <StyledButton buttonText={"Log in"} handleClick={() => navigate('/login')} ariaLabel="back"/>
      </div>
    </Paper>
  );
};

export default RegisterForm;
