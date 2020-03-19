import Data from "../helper/data.js";

const initState = {
  baseData: Data
};

const rootReducers = (state = initState, action) => {
  switch (action.type) {
    case "UPDATE_DATA": {
      state = { ...state, baseData: action.payload };
      break;
    }

    default: {
      return state;
    }
  }
  return state;
};

export default rootReducers;
