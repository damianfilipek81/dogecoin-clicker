const reducerName = 'points';
const createActionName = (name) => `app/${reducerName}/${name}`;

const ADD_POINT = createActionName('ADD_POINT');
const REMOVE_POINT = createActionName('REMOVE_POINT');
const ADD_POINT_PER_SEC = createActionName('ADD_POINT_PER_SEC');
const RESET_STATE = createActionName('RESET_STATE');

export const addPoint = (payload) => ({ payload, type: ADD_POINT });
export const removePoint = (payload) => ({ payload, type: REMOVE_POINT });
export const addPointPerSec = (payload) => ({ payload, type: ADD_POINT_PER_SEC });
export const resetPointState = (payload) => ({ payload, type: RESET_STATE });

export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case ADD_POINT: {
      return {
        points: statePart.points + action.payload,
        pointsPerSec: statePart.pointsPerSec,
        total: statePart.total + action.payload,
      };
    }
    case REMOVE_POINT: {
      return {
        points: statePart.points - action.payload,
        pointsPerSec: statePart.pointsPerSec,
        total: statePart.total,
      };
    }
    case ADD_POINT_PER_SEC: {
      return {
        points: statePart.points,
        pointsPerSec: statePart.pointsPerSec + action.payload,
        total: statePart.total,
      };
    }
    case RESET_STATE: {
      return {
        points: 0,
        pointsPerSec: 0,
        total: 0,
      };
    }
    default:
      return statePart;
  }
};
