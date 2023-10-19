import { useState } from "react";
import { Paper, Typography, Fade, Collapse } from "@mui/material";
import StyledButton from "../../_components/StyledButton";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import InputForm from "../../_components/InputForm";
import api from "../../../api";
import { setUser } from "../../../config/userSlice";

const AccountForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.userSlice.user)
    const signedIn = useSelector(store=> store.userSlice.signedIn)
    const [openEmail, setOpenEmail] = useState(false);
    const [newEmail, setNewEmail] = useState('');
    const [openPassword, setOpenPassword] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [password, setPassword] = useState('');
    const [newPasswordError, setNewPasswordError] = useState(0);
    const [newPasswordSuccess, setNewPasswordSuccess] = useState('');
    const [newEmailError, setNewEmailError] = useState(0)
    const [newEmailStatus, setNewEmailStatus] = useState('');
    const [newEmailSuccess, setNewEmailSuccess] = useState(false);
    const [passwordError, setPasswordError] = useState(0);
    const [newPasswordStatus, setNewPasswordStatus] = useState('');

    const updateEmail = () => {
        setNewEmailError()
        setPasswordError()
        let error = false;
        if (newEmail.length === 0) {
            setNewEmailError('Please input a new email address.')
            error = true;
        }
        if (password.length === 0) {
            setPasswordError('Please input your password.')
            error = true;
        }
        if (newEmail === user.email) {
            setNewEmailError('New email cannot match old email.')
            error = true;
        }

        if (error) return;

        const payload = {
            email: user.email, 
            password: password, 
            newEmail: newEmail
        }
        api.postRequest('/api/account/change-email', payload)
        .then(result=>{
            if (result.error) setNewEmailStatus(result.message)
            else {
                dispatch(setUser({...user, email: newEmail}))
                setOpenEmail(false);
                setNewEmailSuccess(true);
                setNewEmail('');
            }
        })
        .catch(error => {
            setNewEmailError('Error updating your email. Please try again.')
        })
    }

    const updatePassword = () => {
        setNewPasswordError();
        setPasswordError();
        setNewPasswordStatus('');
        let error = false;
        if (newPassword.length < 8) {
            setNewPasswordError('Password must be atleast 8 characters.')
            error = true;
        }
        if (password.length === 0) {
            error = true;
            setPasswordError('Please input a password.');
        }
        if (password === newPassword) {
            error = true;
            setNewPasswordError('New password is the same as your old password.');
        }
        if (error) return;

        const payload = {
            email: user.email, 
            password: password, 
            newPassword: newPassword
        }
        api.postRequest('/api/account/change-password', payload)
        .then(result=>{
            if (result.error) setNewPasswordStatus(result.message)
            else {
                dispatch(setUser(result.data))
                setOpenPassword(false);
                setNewPasswordSuccess(true);
                setNewPassword('');
            }
        })
        .catch(error => {
            setNewPasswordStatus('Unexpected Error. Try again.')
        })
    }

    return (
        <Paper className="pb-2 w-full m-auto flex flex-col items-center">
            <Typography
                className="pt-2 h-fit"
                variant="h5"
                sx={{ fontWeight: "bold" }}
            >
                Your Account
            </Typography>
            <div className="p-2">
                <Typography><span className="font-bold">Email:</span> {user.email}</Typography>
            </div>
            <div className="p-2 flex flex-col text-center">
                <Typography color='green'>
                    {newEmailSuccess ? "Email updated." : null}
                </Typography>
                <StyledButton
                    buttonText={'Change Email'}
                    handleClick={()=>{
                        setOpenEmail(!openEmail);
                        setOpenPassword(false)
                        setPassword('');
                    }}
                    ariaLabel="change email"
                />
            </div>
            <Collapse in={Boolean(openEmail)} className="w-full">
                <div className="flex flex-col text-center items-center p-2">
                    <Typography>{newEmailStatus}</Typography>
                    <InputForm
                        placeholder={'New Email'}
                        setInput={setNewEmail}
                        input={newEmail}
                        required={true}
                        error={newEmailError}
                    />
                    <InputForm 
                        placeholder={'Password'} 
                        setInput={setPassword}
                        input={password}
                        required={true}
                        error={passwordError}
                    />
                    <div className="">
                        <StyledButton 
                            buttonText={'Update'}
                            handleClick={updateEmail}
                            ariaLabel="update email"
                        />
                    </div>
                </div>
            </Collapse>
            <div className="p-2 flex flex-col text-center">
                <Typography color='green'>
                    {newPasswordSuccess ? "Password updated." : null}
                </Typography>
                <StyledButton
                    buttonText={'Change Password'}
                    handleClick = {()=>{
                        setOpenPassword(!openPassword);
                        setPassword('');
                        setOpenEmail(false)
                    }}
                    ariaLabel="change password"
                />
            </div>
            <Collapse in={Boolean(openPassword)}>
                <div className="flex flex-col items-center p-2">
                    <Typography>{newPasswordStatus}</Typography>
                    <InputForm
                        placeholder={'Password'}
                        setInput={setPassword}
                        input={password}
                        required={true}
                        error={passwordError}
                    />
                    <InputForm
                        placeholder={'New Password'}
                        setInput={setNewPassword}
                        input={newPassword}
                        required={true}
                        error={newPasswordError}
                    />
                    <StyledButton
                        buttonText={'Update'}
                        handleClick={updatePassword}
                        ariaLabel="update password"
                    />
                </div>
            </Collapse>
        </Paper>
    )
}

export default AccountForm;