//5th page work

import mongoose from "mongoose";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import crypto from "crypto";

const userSchema = new mongoose.Schema({
    name: String,
    email:String,
    password:{
        type:String,
        minLength:[8,"Password must be at least 8 characters long"],
        maxLength:[32,"Password must be less than 32 characters long"],
        select:false,

            },
    phone:String,
    accountVerified:{
        type:Boolean,
        default:false
    },
    verificationCode:Number,
    verificationCodeExpires:Date,
    resetPasswordToken:String,
    resetPasswordExpires:Date,
    createdAt:{
        type:Date,
        default:Date.now,
    },
})
userSchema.pre('save', async function () {
  if (!this.isModified('password')) {
    return;
  }

  this.password = await bcrypt.hash(this.password, 10);
});


userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.generateVerificationCode =function() {
    function generateRandomFiveDigitcode(){
        const fiveDigitCode = Math.floor(Math.random()* 9)+1;
        const remainingDigits = Math.floor(Math.random()* 10000)
        .toString().padStart(4, "0");

        return parseInt(fiveDigitCode + remainingDigits);
    }

    const verificationCode=generateRandomFiveDigitcode();
    this.verificationCode=verificationCode;
    this.verificationCodeExpires=Date.now()+ 2 * 60 * 1000;  //2minutes
    return verificationCode;
};

userSchema.methods.generateToken = async function(){
      return jwt.sign(
        {id:this._id}, 
        process.env.JWT_SECRET_KEY,
        {
        expiresIn:process.env.JWT_EXPIRE,
      }
    );
};

 userSchema.methods.generateResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");

  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetPasswordExpires = Date.now() + 5 * 60 * 1000;

  return resetToken;
};


export const User= mongoose.model('User',userSchema);