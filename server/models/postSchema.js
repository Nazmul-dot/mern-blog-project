const mongoose=require('mongoose')

const postSchema=new mongoose.Schema({
    creator:{
        type:String,
    },
    title:{
        type:String,
    },
    message:{
        type:String,
    },
    cetagory:{
        type:String,
    },
    image:{
        type:String,
    },
    cloudinary_id:{
        type:String
    },
    likes:{
        type:Array,
        default:[]
    },
    number_like:{
        type:Number,
        default:0
    }
},
{ timestamps: true }
)

const POST=new mongoose.model('post',postSchema)
module.exports=POST