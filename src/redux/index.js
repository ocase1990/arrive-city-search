import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import details from './details';

const initialState = {
  details: [],
  isFetching: false,
  error: false,
  initialized: false,
};

const INIT = 'search/INIT';

const ui = (state = initialState, action) => {

  switch (action.type) {

    case INIT:
      return {
        ...state,
        initialized: true,
      }
    default:
      return state;

  }

}

const reducer = combineReducers({
  ui,
  details,

})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(
      thunk
    )
  )
);

export default store;
