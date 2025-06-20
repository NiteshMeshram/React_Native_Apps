// src/network/ApiEndpoints.ts


export enum ApiEndpoints {
  GET_CATEGORIES = "categories",
  GET_PRODUCTS_BY_CATEGORY = "categories/", // :id/products (othere way )
  
}

export const withParams = (
  endpoint: string,
  params: Record<string, string | number>
): string => {
  return Object.entries(params).reduce((url, [key, val]) => {
    return url.replace(`:${key}`, encodeURIComponent(val.toString()));
  }, endpoint);
};