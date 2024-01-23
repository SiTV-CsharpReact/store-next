export interface Product {
    Id: number;
    Name: string;
    Description: string;
    Price: number;
    PictureUrl: string;
    Type: string;
    Brand: string;
    Quantity: number;
  }
 export interface ProductsProps {
    products: Product[];
  }