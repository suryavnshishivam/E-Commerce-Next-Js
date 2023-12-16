import axios from "axios";

export const getProductData = () => {
  return axios.get("https://fakestoreapi.com/products");
};
export const getProductDetailsById = (id) => {
  return axios.get(`https://fakestoreapi.com/products/${id}`);
};
