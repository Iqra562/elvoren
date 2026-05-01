import { connectDB } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import User from '@/models/User'
export async function POST(request : NextRequest) {
    try {
        connectDB();
        const { name, email, password } = await request.json();
        if (!name || !email || !password) {
            return NextResponse.json(
                { success: false, message: "All fields are required" },
                { status: 400 }
            )

            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return NextResponse.json({
                    success: false, message: "User with email already exists"
                }, { status: 409 })
            }

        }

        const user = await User.create({name,email,password});
        const response = NextResponse.json({
            success:true, message:"Account created successfully",
            user:{id:user._id,name:user.name,email:user.email, role:user.role}
        },{status:201})
return response;
    } catch (error )  {
         if (error instanceof Error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
     return NextResponse.json({
        success:false,message: "Server error"
     },{
        status:500
     })
    }
}