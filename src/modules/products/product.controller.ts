import { NextResponse } from "next/server";
import { getProductService } from "./product.service";
import { connectDB } from "@/lib/db";

export async function getProductsController(){
    try{

          await connectDB(); 
        const products = await getProductService();
        return NextResponse.json({
            success:true,
             data:products
        })
    }catch{
        return NextResponse.json({
            success:false
        },{
            status:500
        })
    }
}