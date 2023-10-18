import { Button, Typography } from "@mui/material";

const StyledButton = ({ buttonText, handleClick, ariaLabel='', className = ''}) => {
  return (
    <Button
      variant="contained"
      sx={{
        fontWeight: "bold",
      }}
      color="button"
      onClick={handleClick}
      aria-label={ariaLabel}
      className={className}
    >
      <Typography noWrap>{buttonText}</Typography>
    </Button>
  );
};

export default StyledButton;
