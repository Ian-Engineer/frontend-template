import RegisterForm from "./components/RegisterForm";
import { Box, Fade } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const RegisterPage = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  // check if user is signed in
  const signedIn = useSelector((state) => state.userSlice.signedIn)
  useEffect(()=>{if (signedIn) { navigate('/') } else { setOpen(true)}}, [])

  return (
    <Fade in={open} timeout={500}>
      <div className="flex">
        <Box
          className="m-8 w-full flex"
        >
          <RegisterForm />
        </Box>
      </div>
    </Fade>
  );
};

export default RegisterPage;
