import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { initialState } from './initialState';
import { reducer as darkModeReducer } from './darkModeRedux';
import { reducer as pointsReducer } from './pointsRedux';
import { reducer as shopReducer } from './shopRedux';
import { reducer as achievementsReducer } from './achievementsRedux';
import { reducer as apiReducer } from './apiRedux';
import { reducer as userReducer } from './userRedux';

const reducers = {
  darkMode: darkModeReducer,
  points: pointsReducer,
  shop: shopReducer,
  achievements: achievementsReducer,
  api: apiReducer,
  user: userReducer,
};

Object.keys(initialState).forEach((item) => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

function saveToLocalStorage(state) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem('persistantState', serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem('persistantState');
    if (serialisedState === null) return initialState;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

const combinedReducers = combineReducers(reducers);

const store = createStore(
  combinedReducers,
  loadFromLocalStorage(),
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;