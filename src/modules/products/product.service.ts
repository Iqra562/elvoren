import { Product } from "./product.model";


export async function getProductService() {
    return Product.find();
}