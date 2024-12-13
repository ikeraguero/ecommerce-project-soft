import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../config/config";
import axios from "axios";

const createAxiosInstance = () => {
  const instance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
  });

  return instance;
};

export async function uploadProductImage(data) {
  const axiosInstance = createAxiosInstance();
  const res = await axiosInstance.post(`${BASE_URL}/images/upload`, data);
  if (res.status !== 201) {
    throw new Error("Problem fetching the data");
  }
  return res.data;
}

async function fetchProducts() {
  const axiosInstance = createAxiosInstance();
  const res = await axiosInstance.get(`${BASE_URL}/products`);
  if (res.status !== 200) {
    throw new Error("Problem fetching the data");
  }
  return res.data;
}

async function fetchProductById(productId) {
  const axiosInstance = createAxiosInstance();
  const res = await axiosInstance.get(`${BASE_URL}/products/${productId}`);
  if (res.status !== 200) {
    throw new Error("Problem fetching the data");
  }
  return res.data;
}

export default function useProducts() {
  return useQuery({ queryKey: ["products"], queryFn: fetchProducts });
}

export function useProduct(productId) {
  return useQuery({
    queryKey: ["product"],
    queryFn: () => fetchProductById(productId),
  });
}
