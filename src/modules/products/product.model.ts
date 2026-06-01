import mongoose, { Schema } from "mongoose";
import type { IProduct } from "./product.types";


 const productSchema = new  Schema<IProduct>({
     name:{
        type:String,
        required:true,

     },
     thumbnail:{
        type:String,
 
     },
     description : {
        type:String
     },
     price:{
        type:Number,
        required:true
     },
     stock:{
        type:Number,
        required:true
     }
},{timestamps:true})

export const Product =  mongoose.models.Product ?? mongoose.model<IProduct>("Product", productSchema)