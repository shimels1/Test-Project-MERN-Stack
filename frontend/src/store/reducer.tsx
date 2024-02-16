import * as actionTypes from "./actions";

const initialState: any = {
  songs: [0, 4],
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.ADD_SONGS: {
      return {
        songs: action.song,
      };
    }
    case actionTypes.DELETE_SONG: {
      return;
    }

    default:
      return state;
  }
};

export default reducer;
