import { uploadOnCloudinary } from "@/lib/cloudinary";
import { connectDB } from "@/lib/db";
import {Product} from "@/modules/product/product.model";
import { NextRequest, NextResponse } from "next/server";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function POST(request:NextRequest){
 try{

    await connectDB();
const formData = await request.formData();

 const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const price = Number(formData.get("price"));
    const stock = Number(formData.get("stock"));
    const thumbnail = formData.get("thumbnail") as File;

 if (!thumbnail) {
      return NextResponse.json(
        { message: "No Thumbnail is provided" },
        { status: 400 }
      );
    }
 const bytes = await thumbnail.arrayBuffer();
    const buffer = Buffer.from(bytes);
       const uploadedThumbnail = await uploadOnCloudinary(buffer);
         if (!uploadedThumbnail) {
   return NextResponse.json(
        { message: "No file uploaded" },
        { status: 500 }
      );          }
     

    const product  = await Product.create({name, description, price,stock, thumbnail:uploadedThumbnail.secure_url});
    return NextResponse.json({
        success:true,
        data:product,

    },{status:201})
 }catch (error) {
        if (error instanceof Error) {
            return NextResponse.json(
                { success: false, message: error.message },
                { status: 500 }
            );
        }
        return NextResponse.json({
            success: false, message: "Server error"
        }, {
            status: 500,
              headers: corsHeaders,
        })
    }
}

export async function GET(request:NextRequest){
    try{
 await connectDB();
 const products = await Product.find();
//  const products ='';
 
 return NextResponse.json({
    success:true,
    products,
    message:"Product fetched successfully!"
 },{status:200,        headers: corsHeaders,
})
    }catch(error:any){
       return NextResponse.json({
        success:false,
        message:"Server Error"
       },{status:500})
    }
}