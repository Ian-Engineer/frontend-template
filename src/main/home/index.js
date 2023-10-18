import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchText } from "./store";
import SearchBar from "../_components/SearchBar";

const HomePage = () => {
  const dispatch = useDispatch();

  // redux state
  const signedIn = useSelector((state) => state.userSlice.signedIn);
  const user = useSelector((state) => state.userSlice.user);
  const searchText = useSelector(state=>state.homeSlice.searchText);

  const searchHandler = (text) => {

  }

  useEffect(() => {

  }, []);

  return (
    <div className="max-w-full max-h-full flex flex-col">
      Home
      <div className="w-screen">
        <SearchBar searchText={searchText} setSearchText={(payload)=>dispatch(setSearchText(payload))} searchHandler={searchHandler} handleCancel={()=>dispatch(setSearchText(''))}/>
      </div>
    </div>
  );
};

export default HomePage;
