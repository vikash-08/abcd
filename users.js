const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");
mongoose.connect('mongodb://127.0.0.1/newappfortesting');
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    password:{
        type:String,
    
    },
    confirmpassword:{
        type:String,
    
    },
    isAdmin:{
        type:Boolean,
        default: false,
    },
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
      }],
});

userSchema.plugin(plm);
const User = new mongoose.model("User", userSchema);

module.exports = User;