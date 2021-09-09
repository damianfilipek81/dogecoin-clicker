const reducerName = 'achievements';
const createActionName = (name) => `app/${reducerName}/${name}`;

const ADD_ACHIEVEMENT_POINTS = createActionName('ADD_ACHIEVEMENT_POINTS');
const ADD_ACHIEVEMENT_POINTS_PER_SEC = createActionName(
  'ADD_ACHIEVEMENT_POINTS_PER_SEC'
);
const CHANGE_ACHIEVEMENT_POINTS_VISIBLE = createActionName(
  'CHANGE_ACHIEVEMENT_POINTS_VISIBLE'
);
const CHANGE_ACHIEVEMENT_POINTS_PER_SEC_VISIBLE = createActionName(
  'CHANGE_ACHIEVEMENT_POINTS_PER_SEC_VISIBLE'
);

export const addAchievementPoints = (payload) => ({
  payload,
  type: ADD_ACHIEVEMENT_POINTS,
});

export const addAchievementPointsPerSec = (payload) => ({
  payload,
  type: ADD_ACHIEVEMENT_POINTS_PER_SEC,
});

export const changeAchievementPointsVisible = (payload) => ({
  payload,
  type: CHANGE_ACHIEVEMENT_POINTS_VISIBLE,
});

export const changeAchievementPointsPerSecVisible = (payload) => ({
  payload,
  type: CHANGE_ACHIEVEMENT_POINTS_PER_SEC_VISIBLE,
});


export const reducer = (statePart = {}, action = {}) => {
  switch (action.type) {
    case ADD_ACHIEVEMENT_POINTS: {
      return {
        requiredPoints: statePart.requiredPoints.filter((data) =>
          data.required <= action.payload && data.unlocked === false
            ? (data.unlocked = true)
            : data
        ),
        requiredPointsPerSec: statePart.requiredPointsPerSec,
        requiredLevel: statePart.requiredLevel,
      };
    }
    case ADD_ACHIEVEMENT_POINTS_PER_SEC: {
      return {
        requiredPoints: statePart.requiredPoints,
        requiredPointsPerSec: statePart.requiredPointsPerSec.filter((data) =>
          data.required <= action.payload && data.unlocked === false
            ? (data.unlocked = true)
            : data
        ),
        requiredLevel: statePart.requiredLevel,
      };
    }
    case CHANGE_ACHIEVEMENT_POINTS_VISIBLE: {
      return {
        requiredPoints: statePart.requiredPoints.filter((data) =>
          data.id === action.payload ? (data.seen = true) : data
        ),
        requiredPointsPerSec: statePart.requiredPointsPerSec,
        requiredLevel: statePart.requiredLevel,
      };
    }
    case CHANGE_ACHIEVEMENT_POINTS_PER_SEC_VISIBLE: {
      return {
        requiredPoints: statePart.requiredPoints,
        requiredPointsPerSec: statePart.requiredPointsPerSec.filter((data) =>
        data.id === action.payload ? (data.seen = true) : data
      ),
        requiredLevel: statePart.requiredLevel,
      };
    }

    default:
      return statePart;
  }
};
