import { API_URL } from '../config';
import Axios from 'axios';

/* action name creator */
const reducerName = 'api';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const SAVE_GAME = createActionName('SAVE_GAME');

/* action creators */
export const fetchStarted = (payload) => ({ payload, type: FETCH_START });
export const fetchSuccess = (payload) => ({ payload, type: FETCH_SUCCESS });
export const fetchError = (payload) => ({ payload, type: FETCH_ERROR });
export const gameSaved = (payload) => ({ payload, type: SAVE_GAME });

/* thunk creators */

export const postSaveGame = () => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());
    const data = getState();

    Axios.post(`${API_URL}/data/add`, { data })
      .then((res) => {
        dispatch(gameSaved(true));
        dispatch(fetchSuccess());
      })
      .then((res) => {
        dispatch(gameSaved(false));
      })
      .catch((err) => {
        dispatch(fetchError(err.message || true));
      });
  };
};

export const fetchSavedGame = () => {
  return (dispatch, getState) => {
    Axios.get(`${API_URL}/data/myData`)
      .then((res) => {
        console.log(res);
        const serialisedState = JSON.stringify(res.data[0].data);
        localStorage.setItem('persistantState', serialisedState);
        window.location.reload();
      })
      .catch((err) => {
        dispatch(fetchError(err.message || true));
      });
  };
};
/* reducer */
export const reducer = (statePart = {}, action = {}) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case SAVE_GAME: {
      return {
        saved: action.payload,
        loading: {
          active: false,
          error: false,
        },
      };
    }
    default:
      return statePart;
  }
};
