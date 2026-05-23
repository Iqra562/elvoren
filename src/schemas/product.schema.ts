import { success, z } from 'zod'



// Base schema  ( what the API returns)

export const ProductResponseSchema = z.object({
    _id: z.string(),
    name: z.string(),
    thumbnail: z.string().url(),
    description: z.string(),
    price: z.number().positive(),
    stock: z.number().int().nonnegative(),
     createdAt: z.string().datetime(),
  updatedAt: z.string().datetime()    

})



// Create/update product payload

export const ProductPayloadSchema= z.object({
    name:z.string().min(1,"Name is required"),
     thumbnail: z.string().url("Must be a valid URL"),
  description: z.string(),
  price: z.number().positive("Price must be greater than 0"),
  stock: z.number().int().nonnegative("Stock cannot be negative"),

})




// Api response wrapper

export const ProductApiResponseSchema = z.object({
    success:z.boolean(),
    products:z.array(ProductResponseSchema),
    message:z.string(),

})



// Infer typescript types from schemas
// using z.infer to automatically create TypeScript types from  Zod schemas.

export type ProductResponse =z.infer<typeof ProductResponseSchema>;
export type ProductPayload = z.infer<typeof ProductPayloadSchema>;
export type ProductApiResponse = z.infer<typeof ProductApiResponseSchema>;

