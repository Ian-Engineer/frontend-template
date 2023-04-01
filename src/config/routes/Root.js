import NavigationBar from "../../main/components/Navigation";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  );
};

export default Root;
