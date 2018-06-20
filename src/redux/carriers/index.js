import { getCarriers } from '../../helpers/api/carriers';

// Actions
const GET_CARRIERS_PENDING = 'search/carriers/GET_CARRIERS_PENDING';
const GET_CARRIERS_REJECTED = 'search/carriers/GET_CARRIERS_REJECTED';
const GET_CARRIERS_FULFILLED = 'search/carriers/GET_CARRIERS_FULFILLED';

// Reducer
const initialState = {
  carriers: [],
  isFetching: false,
  error: false,
};

const reducer = (state = initialState, action) => {

  switch(action.type) {

    case GET_CARRIERS_PENDING:
      return {
        ...state,
        isFetching: true,
      }

    case GET_CARRIERS_FULFILLED:
      return {
        ...state,
        isFetching: false,
        carriers: action.payload,
        error: false,
      }

    case GET_CARRIERS_REJECTED:
      return {
        ...state,
        error: true,
        carriers: initialState.carriers,
      }

    default:
      return state;

  }

}

// Action Creators

const getCarriersPending = (currentCity) => ({
  type: GET_CARRIERS_PENDING,
})

const getCarriersFulfilled = (results) => ({
  type: GET_CARRIERS_FULFILLED,
  payload: results,
})

const getCarriersRejected = (error) => ({
  type: GET_CARRIERS_FULFILLED,
  payload: error,
})

export const fetchCarriers = (currentCity) =>
  dispatch => {

    // 1. tell the store we're fetching
    dispatch(getCarriersPending(currentCity))
    // 2. fetch carriers

    return getCarriers(currentCity)
      // 3. return results on success
      .then(res => dispatch(getCarriersFulfilled(res)))
      // 4. return an error on error
      .catch(error => dispatch(getCarriersRejected(error)))


  }

export default reducer;
