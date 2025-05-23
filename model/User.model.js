import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name : String,
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : String,
    role : {
        type : String,
        enum : ["user", "admin"],
        default : "user"
    },
    isVerified :{
        type : Boolean,
        default : false
    },
    VerificationToken: {
        type : String,
    },
    resetPasswordExpiry: {
        type: Date,
    }

},{
    timestamps: true
})


const User = mongoose.model("User", userSchema)

export default User