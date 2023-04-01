import rootReducer from "./reducer";
import { createStore } from "redux";

const rootStore = createStore(rootReducer);

export default rootStore;
