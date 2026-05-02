import mongoose, { Schema } from "mongoose";

export interface IProduct extends Document{
    name:string,
    thumbnail:string,
    description?:string,
    price :number,
    stock:number,
}

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

export const Product =  mongoose.models.Product || mongoose.model("Product", productSchema)