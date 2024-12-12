const jwt = require("jsonwebtoken");
const User = require('../models/users');

const authHandler = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        console.log(token);
        const decodedToken = jwt.verify(token, "FarsanMartBaka");
        const exist = await User.findOne({email: decodedToken.email});
        console.log(decodedToken);
        const {email, password} = decodedToken;
        if(exist){
            next();
        }else{
            throw "Invalid email ID.";
        }
    } catch {
        res.status(401).json({message: "User not Authorized."})
    }
};

module.exports = authHandler;