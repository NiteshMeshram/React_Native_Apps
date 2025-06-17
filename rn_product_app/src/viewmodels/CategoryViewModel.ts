import { useEffect, useState } from "react";
import { Category } from "../models/Category";

export const useCategoryViewModel = () => {
    const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setCategories([
        { id: 1, name: "Clothes-234", imageUrl: "https://via.placeholder.com/100x100.png?text=Clothes" },
        { id: 2, name: "Electronics", imageUrl: "https://via.placeholder.com/100x100.png?text=Electronics" },
        { id: 3, name: "Furniture", imageUrl: "https://via.placeholder.com/100x100.png?text=Furniture" },
        { id: 4, name: "Shoes", imageUrl: "https://via.placeholder.com/100x100.png?text=Shoes" },
        { id: 5, name: "Miscellaneous", imageUrl: "https://via.placeholder.com/100x100.png?text=Misc" },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return { categories, loading };
}