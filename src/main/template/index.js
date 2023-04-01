import { useState, useEffect } from "react";
import api from "../../api";
import { useSelector, useDispatch } from "react-redux";
import { setExample } from "./store";

const TemplatePage = () => {
  // local state
  const [localState, setLocalState] = useState("default");

  // redux state
  const example = useSelector((state) => state.template.example);

  // render
  useEffect(() => {}, []);

  return <div>example</div>;
};

export default TemplatePage;
