import { createStore } from 'redux';

const initialState = {
  lang: 'ru',
  userName: null
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'LANG_CHANGE':
      return {
        ...state,
        lang: action.payload
      };
    case 'USER-NAME_CHANGE':
      return {
        ...state,
        userName: action.payload,
      };
    default:
      return state;
  }
};

export default createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
