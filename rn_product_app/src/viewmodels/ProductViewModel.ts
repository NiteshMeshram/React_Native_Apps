// src/viewmodels/ProductViewModel.ts

import { useEffect, useState } from "react";
import { Product } from "../models/Product";
import NetworkManager from "../network/NetworkManager";
import { ApiEndpoints, withParams } from "../network/ApiEndpoints";
import { getCachedProducts, storeProducts } from '../services/productStorage';
import { useCachedApiData } from "../services/useCachedApiData";


export const useProductViewModel = (categoryId: number) => {

  const fetchProductsFromAPI = async (categoryId: number): Promise<Product[]> => {
    return await NetworkManager.get<Product[]>(`${ApiEndpoints.GET_PRODUCTS_BY_CATEGORY}${categoryId}/products`);
  };

    const key = `products-${categoryId}`;
  const fetcher = () => fetchProductsFromAPI(categoryId);

  const { data: products, loading, error } = useCachedApiData<Product[]>(
    key,
    fetcher,
    { cacheTimeInMs: 1000 * 60 * 10 } // 10 mins
  );

  return { products: products ?? [], loading, error };
}
