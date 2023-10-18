import ContactForm from "./components/ContactForm";
import { Box, Fade } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ContactPage = () => {
  const [open, setOpen] = useState(false);
  useEffect(()=>{setOpen(true)})
  return (
    <Fade in={open} timeout={500}>
      <div className="flex flex-grow">
        <Box // mobile version
          className="m-8 w-full max-h-full flex flex-col"
        >
          <ContactForm />
        </Box>
      </div>
    </Fade>
  );
};

export default ContactPage;
