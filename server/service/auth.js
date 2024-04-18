const jwt = require("jsonwebtoken");
//const secret = "FE@Track@123";


function setUser( user){
   return jwt.sign({
   _id: user._id,
   userName: user.userName,
   },process.env.secret);
}

function getUser(token) {
    if(!token) return null;
    try {
        return jwt.verify(token,process.env.secret);
        
    } catch (error) {
        return null;
    }
}

module.exports = {
    setUser,
    getUser,
}