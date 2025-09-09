const jwt = require("jsonwebtoken");
require("dotenv").config();
const jwtAuth = (req, res, next) =>{

    let token = req.cookies.authToken;

    if(!token){
        return res.send({message:"Unauthorized access!"});
    }
    if (token.startsWith("Bearer ")) {
        token = token.slice(7, token.length); // remove first 7 chars
    }

    try{
        const payload = jwt.verify(token, process.env.SECRET_KEY);
        console.log(payload);
        next();
    }catch(error){
        console.log(error)
        return res.status(400).send({message:"Bad Request!!"});
    }

    
}

module.exports= jwtAuth;