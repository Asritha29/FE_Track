const JWT = require("jsonwebtoken");

const secret = "FE@Track@123";


function createTokenForuser(user){
    const payload ={
        _id: User._id,
        userName: User.email,
        role: User.role,
    };
    const token = JWT.sign(payload,secret);
    return token;
}


function validateToken(token){
    const payload = JWT.verify(token,secret);
    return payload;
};
module.exports = {
    createTokenForuser,validateToken
}