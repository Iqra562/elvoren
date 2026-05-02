import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { type } from "os";
import { Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: "user" | "admin";
  comparePassword(password: string): Promise<boolean>;
}

const UserSchema = new mongoose.Schema<IUser>({
 name:{
    type: String,
    required: true,
 },
 email:{
    type: String,
    required:[true, "Please enter your email"],
    unique: true,
     lowercase: true,

},
password:{
    type: String,
    required:[true, "Please enter your password"],
    minLength: [6, "Password must be at least 6 characters long"],
},
role:{
    type: String,
    enum:['user', 'admin'],
    default: 'user',
}
},{
timestamps: true
})

UserSchema.pre('save',async function(){
if(!this.isModified("password")) return ;
this.password = await bcrypt.hash(this.password,12);
})

UserSchema.methods.comparePassword = async function(password: string){
  return await bcrypt.compare(password, this.password)
}   

export default mongoose.models.User || mongoose.model("User", UserSchema)