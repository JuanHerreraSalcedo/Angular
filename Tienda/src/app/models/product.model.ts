export interface Category{
    id: string;
    name: string;
}
export interface Product{
    id: string;
    title: string;
    price: number;
    images: string[];
    description: string;
    category: Category;
}
export interface createProductDTO extends Omit<Product, 'id' | 'category'>{
    categoryId: number;
}