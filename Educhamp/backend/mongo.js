import mongoose from "mongoose"
mongoose.connect("mongodb://localhost:27017/story-generator")
.then(() =>{
    console.log("connected");
})
.catch(()=>{
    console.log("fail");
})

const newSchema=new mongoose.Schema({
    msg:{
        type:String,
        required:true
    }
})
const collection=mongoose.model("collection",newSchema);

module.exports=collection;