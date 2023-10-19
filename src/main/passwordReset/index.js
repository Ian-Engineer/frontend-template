import { Box } from "@mui/material";
import PasswordResetForm from "./components/PasswordResetForm";

const PasswordResetPage = () => {
  return (
    <>
      <Box // mobile version
        className="m-16 w-full flex"
      >
        <PasswordResetForm />
      </Box>
    </>
  );
};

export default PasswordResetPage;
