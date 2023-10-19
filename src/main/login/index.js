import { Box, Collapse, Fade } from "@mui/material";
import Subscribe from "../_components/Subscribe";
import LoginForm from "./components/LoginForm";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SubscribeButton from '../_components/SubscribeButton'

const LoginPage = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  // check if user is signed in
  const signedIn = useSelector((state) => state.userSlice.signedIn)
  useEffect(()=>{if (signedIn) { navigate('/') } else { setOpen(true)}},[signedIn])

  return (
    <Fade in={open} timeout={500}>
      <div className="flex">
          <Box
            className="m-8 w-full flex"
          >
            <LoginForm />
          </Box>
      </div>
    </Fade>
  );
};

export default LoginPage;
