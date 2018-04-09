import { get } from '../'

// detailId will be the id from the carrier (1, 2, 3, etc)
export const getDetails = ((detailId) => {
  return get(`http://arrive-interview-api.azurewebsites.net/api/carrierDetails/${detailId}`)
});
