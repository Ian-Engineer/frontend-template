import { Paper, Typography } from "@mui/material";
import InputForm from "../../_components/InputForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../api";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../../config/userSlice";
import { Label } from "@mui/icons-material";
import StyledButton from "../../_components/StyledButton";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(0);
  const [passwordError, setPasswordError] = useState(0);
  const [loginError, setLoginError] = useState("");
  const lastLocation = useSelector(state=>state.userSlice.lastLocation)

  const navigate = useNavigate();

  const signIn = () => {
    let error = false;
    setEmailError(0);
    setPasswordError(0);
    // make sure email and password have values entered
    if (email.indexOf("@") < 0 || email.indexOf(".") < 0) {
      setEmailError('Invalid email format.');
      error = true;
    }

    if (!email.length) {
      setEmailError('Please input your email.');
      error = true;
    }
    if (!password.length) {
      setPasswordError('Please input your password.');
      error = true;
    }

    if (!error) {
      // no error in inputs
      // make api call
      api.postRequest('/api/login', { email, password })
      .then((response) => {
        if (response.error) {
          // set login error
          setLoginError(response.message);
        } else {
          setLoginError("");
          dispatch(setUser(response.data));
          navigate(lastLocation);
        }
      });
    }
  };

  return (
    <Paper className="pb-2 w-full m-auto flex flex-col items-center">
      <Typography
        className="pt-2 h-fit"
        variant="h5"
        sx={{ fontWeight: "bold" }}
      >
        Login
      </Typography>
      <Typography>{loginError}</Typography>
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
        autoComplete={'current-password'}
        ariaLabel="input password"
      />
      <Typography
        color={"#0000EE"}
        fontSize={"0.8rem"}
        sx={{ "&:hover": { cursor: "pointer" } }}
        onClick={() => navigate("/password_reset")}
      >
        Forgot your password?
      </Typography>
      <div className="h-2" />
      <StyledButton buttonText={"Submit"} handleClick={signIn} ariaLabel="submit"/>
      <div className="h-2" />
      <div className="p-2 font-normal">
        - OR - 
      </div>
      <StyledButton
        buttonText={"Create Account"}
        handleClick={() => navigate("/register")}
        ariaLabel="create account"
      />
    </Paper>
  );
};

export default LoginForm;
