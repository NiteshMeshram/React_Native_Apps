import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useCachedApiData = <T>(
  key: string,
  fetcher: () => Promise<T>,
  options: { cacheTimeInMs?: number } = {}
) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  const loadData = async () => {
    setLoading(true);

    try {
      // 1. Get cached value + timestamp
      const cached = await AsyncStorage.getItem(key);
      const timestamp = await AsyncStorage.getItem(`${key}-timestamp`);

      const now = Date.now();
      const cacheAge = timestamp ? now - parseInt(timestamp) : Infinity;

      const isCacheValid = options.cacheTimeInMs
        ? cacheAge < options.cacheTimeInMs
        : true;

      if (cached && isCacheValid) {
        setData(JSON.parse(cached));
      }

      // 2. Always fetch fresh data
      const fresh = await fetcher();
      setData(fresh);

      await AsyncStorage.setItem(key, JSON.stringify(fresh));
      await AsyncStorage.setItem(`${key}-timestamp`, now.toString());
    } catch (err) {
      console.error(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return { data, loading, error, refetch: loadData };
};
