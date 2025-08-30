import mongoose, { model, Schema } from "mongoose";

// mongoose.connect("sdjkf;asjdliufh")
const userSchema = new Schema({
    userName: {type: String, unique: true},
    password: String,
})


export const UserModel =  model( "user", userSchema)

const contentSchema = new Schema({
    Title: String,
    Url: String ,
    tags: [{type: mongoose.Types.ObjectId, ref: 'Tag'}],
    usedId: [{type : mongoose.Types.ObjectId, ref: 'User', require: true}] ,
})

export const contentModel = model("user", contentSchema);
