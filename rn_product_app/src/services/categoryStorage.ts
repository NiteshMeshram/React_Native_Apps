import AsyncStorage from '@react-native-async-storage/async-storage';
import { Category } from '../models/Category';

const CATEGORY_KEY = 'categories';

export const storeCategories = async (categories: Category[]) => {
  try {
    await AsyncStorage.setItem(CATEGORY_KEY, JSON.stringify(categories));
  } catch (error) {
    console.error('Error storing categories:', error);
  }
};

export const getCachedCategories = async (): Promise<Category[] | null> => {
  try {
    const data = await AsyncStorage.getItem(CATEGORY_KEY);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error reading categories:', error);
    return null;
  }
};
export const clearCategoryCache = async () => {
  try {
    await AsyncStorage.removeItem(CATEGORY_KEY);
  } catch (error) {
    console.error('Error clearing category cache:', error);
  }
};