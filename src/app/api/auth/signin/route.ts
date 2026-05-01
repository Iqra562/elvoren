import { connectDB } from "@/lib/db";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken'
 export async function POST(request :NextRequest){

    try{
   await connectDB();
        const {email,password} =await request.json();
        if(!email || !password){
            return NextResponse.json(
        {success:false, message:"email and password are required" },
        {status:400}
    )
    }
    const user = await User.findOne({email});
    if(!user){
         return NextResponse.json({
            success:false, message:"Invalid email or password"
        },{
            status:401
         })
        }

     const isMatch = await user.comparePassword(password);
     if(!isMatch){
          return NextResponse.json(
            {success:false , message:"Invalid email or  password"},
            {status:401}
          )
     } 
       const token = jwt.sign(
        {userId: user._id, role:user.role},
        process.env.JWT_SECRET!,
        {expiresIn:"7d"}
       )

       const response = NextResponse.json({
        success:true, 
        message:"Signed in successfully",
        user: {id:user._id,name:user.name,email:user.email,role:user.role}
       })

       response.cookies.set("token",token,{
        httpOnly:true,
        path:"/",
        
       } )
      return response;
    }catch(error){
        if(error instanceof Error){
  return NextResponse.json({
    success:false,
    message:error.message
  },{
    status:500
  })

        }
       return  NextResponse.json({
    success:false,
    message:"Internal server error"
  },{
    status:500
  })

    }
     

 }