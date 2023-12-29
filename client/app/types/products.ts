export interface Product {
    id: number; 
    name: string;
    price: number;
    image?: string; 
    description: string;
    available: boolean; 
    rate?: number; 
    createdAt: Date;
    quantity?: number; 
    sellerProduct: number; // References the seller id
    img2: string;
    img3: string;
    img4: string;
  }