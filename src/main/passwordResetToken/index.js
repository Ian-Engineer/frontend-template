import { Box } from "@mui/material";
import PasswordResetTokenForm from './components/PasswordResetTokenForm'

const PasswordResetTokenPage = () => {
  return (
    <>
      <Box // mobile version
        className="m-16 w-full flex"
      >
        <PasswordResetTokenForm />
      </Box>
    </>
  );
};

export default PasswordResetTokenPage;
