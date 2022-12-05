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
export interface UpdateProductDTO extends Partial<createProductDTO> {
    // title: string; // es para colocar algo opcional
    // price: number; //Partial<> le añade el ? a todos los datos para que sean opcionales
    // images: string[];
    // description: string;
    // categoryId: number;
}