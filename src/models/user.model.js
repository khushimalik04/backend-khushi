import mongoose, {Schema} from "mongoose"
import jwt from "jsonwebtoken"  //crytohraphy
import bcrypt from "bcryptjs"  //for passwords

const userSchema = new Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true,
            lowecase: true,
            trim: true,
            index: true   //in mongodb if you want any field to be searchable in an optimised way
        },
         email:{
            type: String,
            required: true,
            unique: true,
            lowecase: true,
            trim: true,
        },
        fullname:{
            type: String,
            required: true, 
            trim: true,
            index: true
        },
        avatar:{
            type: String,   //cloudinary url
            required: true,
        },
        coverImage:{
            type: String,
        },
        watchHistroy:[
            {
                type: Schema.Types.ObjectId,
                ref: "video"
            }
        ],
        password: {
            type: String,
            required: [true, 'password is required']
        },
        refreshToken: {
            type: String,
        }
    },{timestamps: true})

    userSchema.pre("save", async function (next) {
        if(!this.isModified("password")) return next();

        this.password = await bcrypt.hash(this.password, 10)
        next()
    })

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function(){
    return JsonWebTokenError.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullname: this.fullname   //payload name: from database
        },
        process.env.ACESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefrehToken = function(){
     return JsonWebTokenError.sign(
        {
            _id: this._id,
        },
        process.env.ACESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User", userSchema) 