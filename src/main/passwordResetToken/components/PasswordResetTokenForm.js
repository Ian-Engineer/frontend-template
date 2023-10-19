import { useState, useEffect } from "react";
import api from "../../../api";
import { useDispatch } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { Box, Paper, Typography } from "@mui/material";
import LoadingSymbol from "../../_components/LoadingSymbol";
import InputForm from "../../_components/InputForm";
import { setUser } from "../../../config/userSlice";
import StyledButton from "../../_components/StyledButton";

const PasswordResetTokenForm = () => {
    const { token } = useParams();
    const navigate = useNavigate()
    const dispatch = useDispatch();
    // local state
    const [loading, setLoading] = useState(true);
    const [validToken, setValidToken] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmError, setConfirmError] = useState(false);
    const [submitError, setSubmitError] = useState('')

    const handleSubmit = () => {
        setSubmitError('')
        // check that both passwords match
        if (password !== confirmPassword) {
            setConfirmError('Password do not match.')
            return;
        }
        // check that they are valid (8 character length min)
        if (password.length < 8) {
            setPasswordError('Password length must exceed 8 characters')
            return;
        }
        // make the api call changing the password and log the user in
        api.postRequest(`/api/password_reset/${token}`, { token, password })
            .then(result => {
                if (result.error) {
                    setValidToken(false)
                    return;
                } else {
                    setValidToken(true)
                    dispatch(setUser(result.data))
                    navigate('/')
                    return;
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

    // render
    useEffect(() => {
        // check if the token is expired
        try {
            const decodedToken = jwtDecode(token);
            const now = new Date();
            if (now > new Date(decodedToken.expiration)) { // token is expired
                setLoading(false);
                setValidToken(false);
            } else {
                setLoading(false);
                setValidToken(true);
            }

        } catch (error) {
            setValidToken(false)
            setLoading(false)
            console.log(error.message)
        }
    }, []);

    const renderContent = () => {
        if (loading) {
            return (
                <Box>
                    <LoadingSymbol />
                </Box>
            )
        }
        if (validToken) {
            return (
                <>
                <Typography className="flex text-center w-5/6" color={"red"}>{submitError}</Typography>
                    <InputForm 
                        placeholder={"Password"}
                        input={password}
                        setInput={setPassword}
                        required={true}
                        error={passwordError}
                        ariaLabel="password"
                        autoComplete={'new-password'}
                    />
                    <InputForm 
                        placeholder={"Confirm Password"}
                        input={confirmPassword}
                        setInput={setConfirmPassword}
                        required={true}
                        error={confirmError}
                        autoComplete={'new-password'}
                        ariaLabel="confirm password"
                    />
                    <StyledButton buttonText={"Change Password"} handleClick={handleSubmit} ariaLabel="change password" />
                </>
            )
        }

        return (
            <Typography className='w-5/6 p-2'>
                We're sorry, but the request has expired or is invalid. If you still need to change your password, please click{` `}
                <Link className="underline text-sky-700" to={'/password_reset'}>here</Link>
                {` `}to retrieve your password again.
            </Typography>
        )
    }

    return (
        <Paper className="pb-2 w-full max-w-fit m-auto flex flex-col items-center">
            <Typography
            className="pt-2 h-fit"
            variant="h5"
            sx={{ fontWeight: "bold" }}
            >
            Reset Password Form
            </Typography>
            {renderContent()}
        </Paper>
    );
}

export default PasswordResetTokenForm