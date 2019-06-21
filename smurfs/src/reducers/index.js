import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_ERROR
} from '../actions';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS_START:
      return { ...state, fetching: true };
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        fetching: false,
        smurfs: [...state.smurfs, ...action.payload]
      };
    case FETCH_ERROR:
      console.log(action.error);
      return { ...state, error: action.error };
    default:
      return state;
  }
};
