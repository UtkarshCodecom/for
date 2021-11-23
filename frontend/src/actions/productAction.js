import axios from "axios";

import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
} from "../constants/productConstants";

// Get All Products
const getProduct = () => async () => {
  let link = `/nse/get_index_stocks?symbol=nifty`;

  const { data } = await axios.get(link);
  console.log(data.data);
};

export default getProduct