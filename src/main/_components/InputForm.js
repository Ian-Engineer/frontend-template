import {
  Box,
  IconButton,
  InputAdornment,
  OutlinedInput,
  FormControl,
  FormHelperText,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

const InputForm = ({
  variant = 'contained',
  placeholder,
  setInput,
  input,
  errorMessage = null,
  required,
  multiline=false,
  minRows=1,
  autoComplete,
  ariaLabel='',
  hiddenText = false,
  regex=/[^-a-zA-Z0-9_@.!]/g
}) => {
  let FormAdornment = null;

  const [showText, setShowText] = useState( hiddenText ? false : true );

  const handleClickShowText = () => setShowText((show) => !show);

  const handleMouseDownHiddenText = (event) => {
    event.preventDefault();
  };

  if (hiddenText) {
    FormAdornment = (
      <IconButton
        aria-label="toggle text visibility"
        onClick={handleClickShowText}
        onMouseDown={handleMouseDownHiddenText}
        edge="end"
        tabIndex={-1}
      >
        {showText ? <Visibility /> : <VisibilityOff />}
      </IconButton>
    );
  }

  // local state

  const onChange = (text) => {
    setInput(text);
  };

  return (
    <Box
      sx={{
        backgroundColor: "secondary.main",
        borderRadius: "16px",
      }}
      className="p-2 w-full h-full m-auto flex justify-center"
    >
      <FormControl variant="outlined" className="w-5/6">
        {/* <InputLabel htmlFor={`outlined-adornment-${placeholder}`}>
          {placeholder}
        </InputLabel> */}
        <OutlinedInput
          variant={variant}
          aria-label={ariaLabel}
          onChange={(e) =>
            onChange(e.target.value.replace(regex, ""))
          }
          placeholder={placeholder}
          value={input}
          error={Boolean(errorMessage)}
          required={required}
          type={showText ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">{FormAdornment}</InputAdornment>
          }
          multiline={multiline}
          minRows={minRows}
          autoComplete={autoComplete}
        />
        <FormHelperText>{errorMessage}</FormHelperText>
      </FormControl>
    </Box>
  );
};

export default InputForm;
