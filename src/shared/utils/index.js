const BASE_URL = 'https://dispex.org/api/vtest';
const jwt = '12345abcdef';

const getResponseData = (res) => {
  if (res.ok) {
    return res.json();
  }
  return res
    .json()
    .then((res) => Promise.reject(new Error(res.message || res.error)));
};

export const getStreetsData = async () => {
  const res = await fetch(`${BASE_URL}/Request/streets`, {
    method: 'GET',
    headers: {
      'content-Type': 'application/json',
      accept: 'application/json',
      Authorization: `Bearer ${jwt}`,
      'Access-Control-Allow-Origin': 'http://localhost:3000',
      Vary: 'Origin',
    },
  });
  return getResponseData(res);
};

export const getHouseNumberData = async (id) => {
  const res = await fetch(`${BASE_URL}/Request/houses/${id}`, {
    method: 'GET',
    headers: {
      'content-Type': 'application/json',
      accept: 'application/json',
      Authorization: `Bearer ${jwt}`,
      'Access-Control-Allow-Origin': 'http://localhost:3000',
      Vary: 'Origin',
    },
  });
  return getResponseData(res);
};

export const getFlatsNumberData = async (id) => {
  const res = await fetch(`${BASE_URL}/Request/house_flats/${id}`, {
    method: 'GET',
    headers: {
      'content-Type': 'application/json',
      accept: 'application/json',
      Authorization: `Bearer ${jwt}`,
      'Access-Control-Allow-Origin': 'http://localhost:3000',
      Vary: 'Origin',
    },
  });
  return getResponseData(res);
};

export const postClientData = async (data, id) => {
  const res = await fetch(`${BASE_URL}/HousingStock/client`, {
    method: 'POST',
    headers: {
      'content-Type': 'application/json',
      accept: 'application/json',
      Authorization: `Bearer ${jwt}`,
      'Access-Control-Allow-Origin': 'http://localhost:3000',
      Vary: 'Origin',
    },
    body: JSON.stringify(data, id),
  });
  return getResponseData(res);
};
