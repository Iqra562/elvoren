import { ApiService } from "@/lib/Api.service";

const productServiceUrl = {
     product:"/product"
}



export interface ProductPayload {
    name:string,
    thumbnail:string,
    description:string,
    price:number,
    stock:number
}

export interface ProductResponse {
    _id:string,
   name:string,
    thumbnail:string,
    description:string,
    price:number,
    stock:number
    
}

interface ProductApiResponse {
  success: boolean;
  products: ProductResponse[];
  message: string;
}

const createProduct = async(payload : ProductPayload) : Promise<ProductResponse>=>{
 const response = await  ApiService.post<ProductResponse>(`${productServiceUrl.product}`,payload);
 return response.data;
}


const getProduct = async(): Promise<ProductResponse[]>=>{
    const response = await ApiService.get<ProductResponse[]>(`${productServiceUrl.product}`);
  return response.data.products;
}

export const productService = {
    createProduct,
    getProduct
}
