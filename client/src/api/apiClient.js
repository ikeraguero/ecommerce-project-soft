import axios from "axios";
import {
  AUTH_BASE_URL,
  BASE_URL,
  COUNTRIES_BASE_URL,
  PAYMENT_BASE_URL,
} from "../config/config";

export const apiClientAuth = axios.create({
  baseURL: AUTH_BASE_URL,
  withCredentials: true,
});

export const apiClientCountries = axios.create({
  baseURL: COUNTRIES_BASE_URL,
  withCredentials: true,
});

export const apiClientPayment = axios.create({
  baseURL: PAYMENT_BASE_URL,
  withCredentials: true,
});

export const apiClient = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(
      error.response?.data?.message || "Something went wrong"
    );
  }
);