const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "title":{type:String,required:true},
        "des":{type:String,required:true},
        "date":{type:Date,required:true},
        "dur":{type:String,required:true},
        "venue":{type:String,required:true},
        "tname":{type:String,required:true}
    }
)

let coursemodel=mongoose.model("courses",schema);
module.exports={coursemodel}