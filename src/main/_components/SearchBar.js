import { Box, TextField, IconButton, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Clear } from "@mui/icons-material";

const SearchBar = ({ searchText, setSearchText, searchHandler, handleCancel}) => {

  const onChange = (text) => {
    setSearchText(text);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  }

  const onSubmit = () => {
    searchHandler(searchText)
  };

  const cancelButton = () => {
    handleCancel();
  }

  return (
    <div className="flex justify-center m-5">
      <Box
        sx={{
          backgroundColor: "secondary.main",
          borderRadius: "16px",
          width: '75%'
        }}
      >
        <TextField
        className="w-full"
          variant="outlined"
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search"
          value={searchText}
          onKeyDown={onKeyDown}
          InputProps={{
            endAdornment: <InputAdornment position="end">
              <IconButton
                type="button"
                aria-label="search"
                onClick={onSubmit}
                color="primary"
                className="m-7"
              >
                <SearchIcon />
              </IconButton>
              { searchText.length > 0 ?
                <IconButton
                  type="button"
                  aria-label="search"
                  onClick={cancelButton}
                  color="primary"
                  className="m-7"
                >
                  <Clear />
                </IconButton>
                :
                null
              }
            </InputAdornment>
          }}
        />
      </Box>
    </div>
  );
};

export default SearchBar;
