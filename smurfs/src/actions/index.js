import axios from 'axios';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';

export const fetchCharacters = () => dispatch => {
  dispatch({
    type: FETCH_SMURFS_START
  });
  axios
    .get('https://cors-anywhere.herokuapp.com/https://swapi.co/api/people')
    .then(res => {
      console.log('response:', res);
      dispatch({
        type: FETCH_SMURFS_SUCCESS,
        payload: res
      });
    })
    .catch(err => {
      dispatch({ type: FETCH_ERROR, error: err });
    });
};
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
