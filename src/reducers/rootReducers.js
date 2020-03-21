import Data from "../helper/data.js";
import newsFeed from "../helper/newsFeed.js";

const initState = {
  baseData: Data,
  newsData: newsFeed
};

const rootReducers = (state = initState, action) => {
  switch (action.type) {
    case "UPDATE_DATA": {
      state = { ...state, baseData: action.payload };
      break;
    }

    case "NEWS_DATA": {
      state = { ...state, newsData: action.payload };
      break;
    }

    default: {
      return state;
    }
  }
  return state;
};

export default rootReducers;
