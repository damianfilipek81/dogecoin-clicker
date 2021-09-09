import { USER_URL } from '../config';
import Axios from 'axios';

const reducerName = 'user';
const createActionName = (name) => `app/${reducerName}/${name}`;

const FETCH_START = createActionName('FETCH_START');
const FETCH_ERROR = createActionName('FETCH_ERROR');

const USER_LOGIN = createActionName('USER_LOGIN');

export const fetchStarted = (payload) => ({ payload, type: FETCH_START });
export const fetchError = (payload) => ({ payload, type: FETCH_ERROR });

export const userLogin = (payload) => ({ payload, type: USER_LOGIN });

export const fetchUser = () => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    Axios.get(`${USER_URL}/login`)
      .then((res) => {
        dispatch(userLogin(res.data));
      })
      .catch((err) => {
        dispatch(fetchError(err.message || true));
      });
  };
};

export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case USER_LOGIN: {
      return {
        logged: action.payload.logged,
        name: action.payload.name,
        id: action.payload.id,
        email: action.payload.email,
        loading: {
          active: false,
          error: false,
        },
      };
    }
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
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
    default:
      return statePart;
  }
};
