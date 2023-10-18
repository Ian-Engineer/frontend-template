import { Apple, Contactless, Facebook, Twitter, YouTube, Instagram, LinkedIn, GitHub } from "@mui/icons-material";
import { Collapse, IconButton, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import InputForm from "../../_components/InputForm";
import { useState, useEffect } from "react";
import StyledButton from "../../_components/StyledButton";
import api from "../../../api";
import { useSelector } from "react-redux";

const ContactForm = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(0)
    const [subject, setSubject] = useState('');
    const [subjectError, setSubjectError] = useState(0);
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [messageError, setMessageError] = useState(0);
    const [submitError, setSubmitError] = useState(false);
    const [submitMessage, setSubmitMessage] = useState()
    const user = useSelector(state=>state.userSlice.user);
    const signedIn = useSelector(state=>state.userSlice.signedIn)
    const [disableEmail, setDisableEmail] = useState(false);
    const [messageSent, setMessageSent] = useState(false);

    const handleSubmit = () => {
        let error;
        // verify email is used
        setEmailError()
        setSubjectError()
        setMessageError()
        if (email.indexOf("@") < 0 || email.indexOf(".") < 0) {
            setEmailError('Invalid email address.');
            error = true;
        }
        if (!email.length) {
            setEmailError('Please input your email.');
            error = true;
        }

        if (!subject.length) {
            setSubjectError('Please include a subject.');
            error = true;
        }

        if (!message.length) {
            setMessageError('Please include a message.');
            error = true;
        }

        if (!error) {
            const payload = {email, subject, message}
            api.postRequest('/api/contact', payload)
                .then(result => {
                    if (result.error) {
                        setSubmitError(true)
                        setSubmitMessage('Message failed to send, please try again.')
                    } else {
                        setSubmitError(false)
                        setSubmitMessage('Thank you for reaching out, we will respond soon!')
                        setMessageSent(true);
                    }
                })
        }
    }

    useEffect(()=>{
        if (signedIn) {
            setEmail(user.email)
            setDisableEmail(true);
        } else {
            setEmail('');
            setDisableEmail(false)
        }
    },[user])

    return (
        <Paper className="pb-2 w-full m-auto flex flex-col items-center min-w-full max-w-fit h-fit p-5 m-auto overflow-y-auto flex flex-col justify-center align-center items-center">
            <Typography
                className="pt-2 h-fit"
                variant="h5"
                sx={{ fontWeight: "bold" }}
            >
                How to reach us!
            </Typography>
            <div className="flex flex-row">
                <IconButton component={Link} to="https://www.facebook.com/">
                    <Facebook/>
                </IconButton>
                <IconButton component={Link} to="https://www.youtube.com/">
                    <YouTube/>
                </IconButton>
                <IconButton component={Link} to="https://www.instagram.com/">
                    <Instagram/>
                </IconButton>
                <IconButton component={Link} to="https://www.twitter.com/">
                    <Twitter/>
                </IconButton>
                <IconButton component={Link} to="https://www.linkedin.com/">
                    <LinkedIn/>
                </IconButton>
                <IconButton component={Link} to="https://www.github.com/">
                    <GitHub/>
                </IconButton>
            </div>
            <Typography className="flex flex-col justify-center items-center">
                <a href="mailto:ianswensson@gmail.com">ianswensson@gmail.com</a>
            </Typography>
            <Typography variant="h5" className="p-2" color={submitError ? 'red' : null}>{submitMessage}</Typography>
            <Collapse className="w-full" in={!messageSent}>
            <div className="pt-5 h-fit w-full flex flex-col justify-center items-center">
                <Typography
                    variant="h7"
                    sx={{ fontWeight: "bold" }}
                >
                    Or contact us right here:
                </Typography>
                <InputForm 
                    placeholder={"Name"}
                    input={name}
                    setInput={setName}
                    autoComplete={'name'}
                    ariaLabel="name"
                    regex={''}
                />
                <InputForm 
                    placeholder={"Email*"}
                    input={email}
                    setInput={(payload) => { return disableEmail? null : setEmail(payload)}}
                    required={true}
                    error={emailError}
                    autoComplete={'email'}
                    ariaLabel="input email"
                />
                <InputForm 
                    placeholder={"Subject*"}
                    input={subject}
                    setInput={setSubject}
                    required={true}
                    error={subjectError}
                    regex={''}
                    ariaLabel="subject of message"
                />
                <InputForm 
                    placeholder={"Message*"}
                    input={message}
                    setInput={setMessage}
                    required={true}
                    error={messageError}
                    multiline={true}
                    minRows={5}
                    regex={''}
                    ariaLabel="message"
                />
                <Typography variant="caption">
                    * = required
                </Typography>
            </div>
                <div className="pt-5 flex justify-center">
                    <StyledButton handleClick={handleSubmit} buttonText={'Send'} ariaLabel="send"/>
                </div>
            </Collapse>
        </Paper>
    )
}

export default ContactForm;