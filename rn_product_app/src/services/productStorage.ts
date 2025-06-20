import AsyncStorage from '@react-native-async-storage/async-storage';
import { Product } from '../models/Product';

export const storeProducts = async (categoryId: string, products: Product[]) => {
  try {
    await AsyncStorage.setItem(`products-${categoryId}`, JSON.stringify(products));
  } catch (error) {
    console.log('Error saving products:', error);
  }
};

export const getCachedProducts = async (categoryId: string): Promise<Product[] | null> => {
  try {
    const data = await AsyncStorage.getItem(`products-${categoryId}`);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.log('Error reading products:', error);
    return null;
  }
};
export const clearProductCache = async (categoryId: string) => {
  try {
    await AsyncStorage.removeItem(`products-${categoryId}`);
  } catch (error) {
    console.log('Error clearing product cache:', error);
  }
};
