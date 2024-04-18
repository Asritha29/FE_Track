function checkForAuthentication(req, res, next) {
  const authorizationHeaderValue = req.headers?.['authorization'];
  req.user = null;
  if (!authorizationHeaderValue || !authorizationHeaderValue.startsWith('Bearer')) {
    return next();
  }
  const token = authorizationHeaderValue.split("Bearer ")[1];
  const user = getUser(token);
  req.user = user;
  return next();
}


function restrictTo(roles) {
  return function(req,res,next){
    if((!req.user)|| !roles.include(req.User.role) )
    return req.redirect("/")
  };

}

/**async function restrictToLoggedinUseronly(req,res,next) {
    const userUid = req.headers?.['Authorization'];

    if (!userUid) return res.redirect("/");
    const token = userUid.split("Bearer ")[1];
    const user = getUser(token);

  if(!user) return res.redirect("/");

  req.user = user;
  next();
}
async function checkAuth(req,res, next){
  const userUid = req.headers("authorization");
  const token = userUid.split("Bearer ")[1];

  const user = getUser(token);
  req.user = User;
  next();
}*/

module.exports = checkForAuthentication;