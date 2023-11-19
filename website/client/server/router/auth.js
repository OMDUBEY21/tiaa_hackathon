const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const authenticate = require("../middleware/authenticate");

require('../db/conn');
const User = require("../model/UserSchema");

router.get('/', (req, res) => {
    res.send('Hello world r');
});

router.post('/register', async (req,res) => {

    const { name, email, phone, password, cpassword } = req.body;

    if(!name || !email || !phone || !password || !cpassword) {
        return res.status(422).json({ error: "Please fill the field Properly" });
    }

    try {
        
        const userExist = await User.findOne({ email: email })
        if (userExist){
            return res.status(422).json({ error: "Email already exist" });
        }else if(password != cpassword){
            return res.status(422).json({ error: "Password are not matching" });
        }else {
            const user = new User({name, email, phone, password, cpassword });
            await user.save();
            return res.status(201).json({ message: "user registerd successfuly" });
        }
        
    } catch (err) {
        console.log(err); 
    }

});
    /* User.findOne({ email: email })
    .then((userExist) => {
        if (userExist) {
            return res.status(422).json({ error: "Email already exist" });
        }

        const user = new User({ name, email, phone, password, cpassword });

        user.save().then(() => {
            res.status(201).json({ message: "user registerd successfuly" });
        }).catch((err) => res.status(500).json({ error: "Failed to register" }));
    
    }).catch(err => { console.log(err); });*/


//login route
router.post('/signin', async (req,res) => {
    try {
        let token;
        const { email, password } = req.body;

        if( !email || !password) {
            return res.status(400).json({error: "Please fill the data"})
        }

        const userLogin = await User.findOne({ email: email });

        // console.log(userLogin);

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

            token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken", token,{
                expires: new Date(Date.now() + 25892000000),
                httpOnly:true
            });



        if(!isMatch){
            res.status(400).json({ error: "Invalid Credientials p" });
        }else {
            res.json({ message: "User Signin Successful"});
        }
        }else {
            res.status(400).json({ error: "Invalid Credientials" });
        }
        

    } catch (err) {
        console.log(err);
        
    }
});

const cookieParser = require("cookie-parser");
router.use(cookieParser());

router.get('/chatbot', authenticate , (req, res) => {
    console.log("hello cb");
    res.send(req.rootUser);
});


router.get('/getdata', authenticate, (req, res) => {
    console.log("hello gd");
    res.send(req.rootUser);
});

router.get('/logout', (req, res) => {
    console.log("hello logout");
    res.clearCookie('jwtoken' , {path: '/'});
    res.status(200).send('User Logout');
});

module.exports = router;