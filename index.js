var express = require('express');
var router = express.Router();
const userModel = require("./users");
const paymentModel = require("./payment");
const courseModel = require("./mycourse");
const passport = require('passport');

const localStrategy = require("passport-local");
passport.use(new localStrategy(userModel.authenticate()));


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/profile', isLoggedIn,  function(req, res, next) {
  res.render('profile', { title: 'Express' });
});

// router.get('/createuser', async function(req, res, next) {
// let createduser = await userModel.create({
//   name:"abhinav",
// email:"abhinav@gamil.com",
// phone:"9876545367",
// password:"hello",
// confirmpassword:"hello",
// isAdmin:true,
// purchasedCourses: [],
// });

// res.send(createduser);
// });

// router.get('/userpayment', async function(req, res, next) {
//  let userPaymentStatus = await paymentModel.create({
//   userId: "66f305fde2659ae18b91c23e",
//   courseId: [],
//   paymentMethod: "UPI",
//   paymentStatus: "completed",
//   datePurchased: [],
//   amountPaid: 599,

//  });
//   res.send(userPaymentStatus);
//   });
  

// router.get('/purchasecourse', async function(req, res, next) {
//   let purchasedcourses = await courseModel.create({
//     title: "cyber Security",
//     description: "cyber scurity course for the next level security of your app",
//     price: 599,
//     category: "Tech",
//     content: [],
  
//     students: "66f305fde2659ae18b91c23e",
  
//     duration: 56
//   });
  
//   let pcourse = await userModel.findOne({id:"66f305fde2659ae18b91c23e"});
//   pcourse.purchasecourse.push(purchasedcourses._id);
//   await pcourse.save();
//   res.send("done")
//   });

//registrartion code

router.post("/register", function(req,res){
  const userData = new userModel({
    username:req.body.username,
  email:req.body.email,
  phone:req.body.phone,


  })

  userModel.register(userData, req.body.password)
  .then(function(){
    passport.authenticate("local")(req, res, function(){
      res.redirect("/profile");
    })
  })
})


router.post("/login", passport.authenticate("local", {
  successRedirect: "/profile",
  failureRedirect: "/login",
  failureFlash: true
}), function(req,res){
 
})

router.get("/logout", function(req,res){
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
})

function isLoggedIn(req,res,next){
  if(req.isAuthenticated()) return next();
  res.redirect("/");
}
module.exports = router;
