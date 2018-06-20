import { get } from '../'

// currentCity is the city searched for by user
export const getDetails = ((date) => {
  console.log(date);
  return get(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=ryNY6UVTEsTHWS8Wtcauh7zfElZkewCfzRvgZNgd`)
});
