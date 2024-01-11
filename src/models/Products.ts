export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    pictureUrl: string;
    type: string;
    brand: string;
    quantity: number;
  }
 export interface ProductsProps {
    products: Product[];
  }