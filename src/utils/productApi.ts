import axios from "axios";

const API_KEY = {
  key: import.meta.env.VITE_FAKE_STORE_API,
};

export const fetchProductsById = async (productId: string) => {
  try {
    const response = await axios.get(`${API_KEY.key}/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product detail: ", error);
    throw error;
  }
};
