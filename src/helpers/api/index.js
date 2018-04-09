import fetchPonyfill from 'fetch-ponyfill';

const {
  fetch,
} = fetchPonyfill();

export const get = (url, options) =>
  fetch(url, { ...options })
    .then(res => res.json())

export const post = (url, body, options) =>
  fetch(url, { ...options, body })
    .then(res => res.json())

export const put = (url, body, options) =>
  fetch(url, { ...options, body })
    .then(res => res.json())
