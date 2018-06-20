import { get } from '../'

// currentCity is the city searched for by user
export const getCarriers = ((currentCity) => {
  return get(`http://arrive-interview-api.azurewebsites.net/api/carriers/${currentCity}`)
});
