import { combineReducers } from "redux";
import alltodoReducer from "./alltodoReducer";
import titleReducer from "./titleReducer";
import decReducer from "./decReducer";

import uptitleReducer from "./uptitleReducer";
import updecReducer from "./updecReducer";

const reducers = combineReducers({
  alltodo: alltodoReducer,
  title: titleReducer,
  dec: decReducer,
  uptitle: uptitleReducer,
  updec: updecReducer
});
export default reducers;
