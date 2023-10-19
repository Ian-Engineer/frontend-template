import { RouterProvider } from "react-router-dom";
import router from "./config/router";
import { Provider } from "react-redux";
import rootStore from "./config/store";
import { ThemeProvider } from "@mui/material";
import theme from "./config/theme";
import { useEffect } from "react";

function App() {

useEffect(() => {

  const setViewHeight = () => {
    let vh = window.innerHeight * 0.01;
    let vw = window.screen.width * 0.01;
    document.documentElement.style.setProperty('--vw', `${vw}px`)
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  // Call setViewHeight initially
  setViewHeight();

  // Add an event listener for both orientationchange and resize events
  window.addEventListener('orientationchange', setViewHeight);
  window.addEventListener('resize', setViewHeight);

  // Cleanup event listeners on component unmount
  return () => {
    window.removeEventListener('orientationchange', setViewHeight);
    window.removeEventListener('resize', setViewHeight);
  };
}, []);

  return (
    <div
      className="max-h-screen max-w-screen w-screen h-screen font-extrabold flex flex-col"
      style={{ background: theme.palette.primary.background }}
    >
      <ThemeProvider theme={theme}>
        <Provider store={rootStore}>
          <RouterProvider router={router} />
        </Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
