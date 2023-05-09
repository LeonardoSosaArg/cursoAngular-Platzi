import { Product } from "./product";

export interface ProductCreateDto extends Omit<Product, 'id' | 'category'> {
    categoryId: number;
  }