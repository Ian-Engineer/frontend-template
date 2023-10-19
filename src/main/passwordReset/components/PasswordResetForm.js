import { Paper, Typography } from "@mui/material";
import InputForm from "../../_components/InputForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../api";
import StyledButton from "../../_components/StyledButton";

const PasswordResetForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [submitError, setSubmitError] = useState("")
  const [successMessage, setSuccessMessage] = useState("");

  const sendEmail = () => {
    setSubmitError("")
    setEmailError("")
    setSuccessMessage("")
    let error = false;
    if (!email.length) {
      setEmailError('Please input your email.');
      error = true;
    }

    if (!error) {
      // make api request
      api.postRequest('/api/password_reset', { email })
        .then(result=>{
          if (result.error) {
            setSubmitError(result.message)
          } else {
            setSuccessMessage(result.message)
          }
        })
        .catch(error=>{
          // if unsuccessful set submit error message
          setSubmitError('Error sending email, please try again.')
        })
    }
  }

  return (
    <Paper className="pb-2 w-full max-w-fit m-auto flex flex-col items-center">
      <Typography
        className="pt-2 h-fit"
        variant="h5"
        sx={{ fontWeight: "bold" }}
      >
        Reset Password
      </Typography>
      <Typography className="flex text-center w-5/6" color={"red"}>{submitError}</Typography>
      <Typography className="flex text-center w-5/6" >{successMessage}</Typography>
      <InputForm
        placeholder={"Email"}
        input={email}
        setInput={setEmail}
        required={true}
        error={emailError}
        autoComplete={'email'}
        ariaLabel="input email"
      />
      <div className="h-2" />
      <div className="flex flex-row-reverse justify-evenly w-full">
        <StyledButton buttonText={"Submit"} handleClick={sendEmail} ariaLabel="submit"/>
        <StyledButton buttonText={"Back"} handleClick={() => navigate('/login')} ariaLabel="back to login"/>
      </div>
    </Paper>
  );
};

export default PasswordResetForm;
