const reducerName = 'shop';
const createActionName = (name) => `app/${reducerName}/${name}`;

const INCREASE_PRICE = createActionName('INCREASE_PRICE');
const ADD_EQ_COUNT = createActionName('ADD_EQ_COUNT');

export const increasePrice = (payload) => ({ payload, type: INCREASE_PRICE });
export const addEqCount = (payload) => ({ payload, type: ADD_EQ_COUNT });

export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case INCREASE_PRICE: {
      return statePart.filter(data => data.id === action.payload.id ? (data.price += action.payload.newPrice) : data)
    }
    case ADD_EQ_COUNT: {
      return statePart.filter(data => data.id === action.payload.id ? (data.count += action.payload.count) : data)
    }
    default:
      return statePart;
  }
};
