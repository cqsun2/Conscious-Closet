import { clothes } from './data.js';

const getClothes = () => {
  return new Promise((resolve, reject) => {
    resolve(Object.values(clothes));
  });
};

const getItemsById = (id) => {
  return new Promise((resolve, reject) => {
    const clothes = clothes[id];
    if(clothes) {
      resolve(clothes);
    }
    else {
      reject();
    }
  });
};


export default {
  getClothes,
  getItemsById,
};
