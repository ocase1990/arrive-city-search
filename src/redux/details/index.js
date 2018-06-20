import { getDetails } from '../../helpers/api/details';

// Actions
const GET_DETAILS_PENDING = 'search/details/GET_DETAILS_PENDING';
const GET_DETAILS_REJECTED = 'search/details/GET_DETAILS_REJECTED';
const GET_DETAILS_FULFILLED = 'search/details/GET_DETAILS_FULFILLED';

// Reducer
const initialState = {
  details: [],
  isFetching: false,
  error: false,
};

const reducer = (state = initialState, action) => {

  switch(action.type) {

    case GET_DETAILS_PENDING:
      return {
        ...state,
        isFetching: true,
      }

    case GET_DETAILS_FULFILLED:
      return {
        ...state,
        isFetching: false,
        details: action.payload,
        error: false,
      }

    case GET_DETAILS_REJECTED:
      return {
        ...state,
        error: true,
        details: initialState.DETAILS,
      }

    default:
      return state;

  }

}

// Action Creators

const getDetailsPending = (date) => ({
  type: GET_DETAILS_PENDING,
})

const getDetailsFulfilled = (results) => ({
  type: GET_DETAILS_FULFILLED,
  payload: results,
})

const getDetailsRejected = (error) => ({
  type: GET_DETAILS_FULFILLED,
  payload: error,
})

export const fetchDetails = (date) =>
  dispatch => {

    // 1. tell the store we're fetching
    dispatch(getDetailsPending(date))
    // 2. fetch DETAILS

    return getDetails(date)
      // 3. return results on success
      .then(res => dispatch(getDetailsFulfilled(res)))
      // 4. return an error on error
      .catch(error => dispatch(getDetailsRejected(error)))


  }

export default reducer;
