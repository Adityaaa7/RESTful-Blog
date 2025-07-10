import mongoose , { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"

const userSchema = new Schema(
    {
        username:{
            type:String,
            required:true,
            lowercase:true,
            unique:true,
            trim:true,
            index:true
        },
        fullname:{
            type:String,
            required:true,
            lowercase:true
        },
        email:{
            type:String,
            required:true,
            lowercase:true,
            unique:true,
            trim:true
        },
        password:{
            type:String,
            required:true, 
        },
        refreshToken:{
            type:String
        }
    }
    ,{timestamps:true})




    //PASSWORD ENCRYPTION   

    userSchema.pre("save",async function(next){

        if(this.isModified("password")) return next

        this.password = await bcrypt.hash(this.password,10)
        next()
    })

    //mongoDB allows to add custom methods
    // 1.PASSWORD CHEKING
    

    export const User = mongoose.model("User",userSchema)