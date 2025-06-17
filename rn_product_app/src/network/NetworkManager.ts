// src/network/NetworkManager.ts

import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const BASE_URL = "https://your-api-domain.com/api"; // Replace with your actual API base

class NetworkManager {
  private axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  // Generic GET request
  async get<T>(endpoint: string, params?: object): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.get(endpoint, { params });
      return response.data;
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  }

  // Generic POST request
  async post<T>(endpoint: string, data: object): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.post(endpoint, data);
      return response.data;
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  }

  // PUT, DELETE etc. can be added similarly
  async put<T>(endpoint: string, data: object): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.put(endpoint, data);
      return response.data;
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  }

  async delete<T>(endpoint: string): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.delete(endpoint);
      return response.data;
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  }

  // Centralized error handling
  private handleError(error: any): void {
    console.error("Network Error:", error?.response?.data || error.message);
    // Optional: Add error tracking/logging here (e.g., Sentry)
  }
}

export default new NetworkManager();
