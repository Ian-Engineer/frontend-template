import { useState, useEffect } from "react";
import { AppBar, Box, Toolbar, IconButton, Button, Typography, Menu, MenuItem } from "@mui/material";
import navigationConfig from "../../config/navigation";
import { useLocation, useNavigate } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import theme from "../../config/theme";
import { useDispatch, useSelector } from "react-redux";
import { logout, setLastLocation } from "../../config/userSlice";
import api from "../../api";

const NavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const signedIn = useSelector(state=>state.userSlice.signedIn)
  const [anchorRtNav, setAnchorRtNav] = useState(null);
  const [rightMenuList, setRightMenuList] = useState([]);
  const [leftMenuList, setLeftMenuList] = useState([]);

  useEffect(()=>{ // tracking previous location before login/register/subscribe
    dispatch(setLastLocation(location.pathname))
  },[location])

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenRtMenu = (event) => {
    setAnchorRtNav(event.currentTarget);
  }

  const handleCloseRtMenu = () => {
    setAnchorRtNav(null);
  }

  const handleNavigate = (path) => {
    handleCloseRtMenu();
    handleCloseNavMenu();
    if (path) navigate(path);
  };

  useEffect(() => {
    let leftMenu = [];
    navigationConfig[0].children.map((page) => {
      if (page.onMenu) {
        leftMenu.push({
          name: page.name,
          onClick: (()=>{
            handleNavigate(page.path)
          })
        })
      }
    })
    setLeftMenuList(leftMenu);

    let rightMenu = [];
    if (signedIn) {
      rightMenu.push(
        {
          name: "Account",
          onClick: ()=>{handleNavigate('/account')}
        },
        {
          name: "Logout",
          onClick: (() => {
            api.deleteRequest('/api/logout')
            .then(result=>{
              if (!result.error) {
                dispatch(logout())
                handleNavigate()
              }
            })
          })
        }
      )
    } else {
      rightMenu.push(
        {
          name: "Log in",
          onClick: () => {handleNavigate('/login')}
        },
        {
          name: "Register",
          onClick: () => {handleNavigate('/register')}
        }
      )
    }
    setRightMenuList(rightMenu)
  }, [signedIn])

  useEffect(()=>{
    // load any information necessary for the nav bar here
  },[])

  return (
    <AppBar position="static">
      <Toolbar
        disableGutters
        style={{ background: theme.palette.primary.mainGradient }}
        className="w-full m-0"
      >
        <Box
          className="ml-2 mr-2 flex flex-row justify-between w-full"
          color="primary"
        >
          <Button
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="primary"
            variant="contained"
          >
            <Typography
              className="flex items-center w-20 justify-center"
              sx={{ fontWeight: "bold" }}
            >
              Categories
            </Typography>
          </Button>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            color="primary.contrastText"
            sx={
              { mt: "1px", "& .MuiMenu-paper": 
                { backgroundColor: "black", }, 
              }
            }
          >
            {leftMenuList.children.map((page) => {
              return (
                <MenuItem key={page.name} onClick={() => handleNavigate(page.path)}>
                  <Typography
                    textAlign="center"
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              );
            })}
          </Menu>
          <img src="/images/1.png" className="h-10" onClick={()=>{handleNavigate('/')}} alt=''/>
          <Button
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenRtMenu}
            color="primary"
            variant="contained"
          >
            <Typography
              className="flex items-center w-20 justify-center"
              sx={{ fontWeight: "bold" }}
            >
              Menu
            </Typography>
          </Button>
          <Menu
          id="menu-appbar"
          anchorEl={anchorRtNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorRtNav)}
          onClose={handleCloseRtMenu}
          sx={
            { mt: "1px", "& .MuiMenu-paper": 
              { backgroundColor: "black", }, 
            }
          }
        >
          {rightMenuList.map((page) => {
            return (
              <MenuItem key={page.name}>
                <Typography
                  textAlign="center"
                  onClick={() => page.onClick()}
                  color='primary.contrastText'
                >
                  {page.name}
                </Typography>
              </MenuItem>
            );
          })}
        </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default NavigationBar;
