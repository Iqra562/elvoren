import z from 'zod'
import type {CreateProductSchema} from './product.schema'
import type { Document } from 'mongoose'



export type CreateProductInput =  z.infer<typeof CreateProductSchema >
 

export interface IProduct extends Document {
    name : string,
    price:number,
    stock:number,
     description:string,
    thumbnail:string,
    createdAt:Date,
    updatedAt:Date


}