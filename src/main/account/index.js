import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Fade, Box } from "@mui/material";
import AccountForm from "./components/AccountForm";
import { useNavigate } from "react-router-dom";

const AccountPage = () => {
  // local state
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // redux state
  const signedIn = useSelector((state) => state.userSlice.signedIn);

  // render
    useEffect(()=>{
        if (!signedIn) { // not signed in
            navigate('/login');
            return;
        } else {
          setOpen(true);
        }
    },[signedIn])

  return (
    <Fade in={Boolean(open)} timeout={500}>
      <div className="flex flex-grow">
        <Box
          className="m-8 w-full flex"
        >
          <AccountForm />
        </Box>
      </div>
    </Fade>
  );
};

export default AccountPage;
