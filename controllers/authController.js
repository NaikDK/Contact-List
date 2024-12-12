const User = require("../models/users");
const asyncHandler = require('express-async-handler');
const jwt = require("jsonwebtoken");


const jwtKey = "FarsanMartBaka";

const registerUser = asyncHandler(async (req, res) => {
    try{
        const exist = await User.findOne({email: req.body.email});
        if(!exist){
            const user = await User.create(req.body);
            res.status(200).json({user: user});
        }else{
            res.status(400).json({message: "User already exists."});
        }
        // res.json({message: "Registered User."});
    }catch(err){
        res.status(401).json({message: err.message});
    }
});

const loginUser = asyncHandler(async (req, res) => {
    try{
        // console.log("Here");
        const {email, password} = req.body;
        const user = await User.findOne({email: email});
        if(user){
            res.status(200).json({idToken: generateToken(user)});
            // res.json(generateToken(user));
        }
        else{
            res.status(401).json({message: "Email or Password is not valid."});
        }
    }catch(e) {
            res.status(401).json({message: "Some error occured."});
    }
});

const verifyUser = asyncHandler(async (req, res) => {
    try{
        const token = req.body.token;
        jwt.verify(token, jwtKey);
    }catch{}
})

const generateToken = (user) => {
    const token = jwt.sign({
        email : user.email,
        password: user.password
    }, jwtKey, {
        expiresIn: "1d"
    });
    user.token = token;
    return user;
}

module.exports = { registerUser, loginUser };