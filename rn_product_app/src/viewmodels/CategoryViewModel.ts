// src/viewmodels/useCategoryViewModel.ts

import { useEffect, useState } from "react";
import { Category } from "../models/Category";
import NetworkManager from "../network/NetworkManager";
import { ApiEndpoints } from "../network/ApiEndpoints";
import { storeCategories, getCachedCategories } from '../services/categoryStorage';
import { useCachedApiData } from "../services/useCachedApiData";


export const useCategoryViewModel = () => {

  const fetchCategoriesFromAPI = async (): Promise<Category[]> => {
    return await NetworkManager.get<Category[]>(ApiEndpoints.GET_CATEGORIES);
  };
  
    const { data: categories, loading, error } = useCachedApiData<Category[]>(
    'categories',
    fetchCategoriesFromAPI,
    { cacheTimeInMs: 1000 * 60 * 30 } // 30 mins
  );

  return { categories: categories ?? [], loading, error };
};
