const jwt = require("jsonwebtoken")
const jwt_secret = process.env.JWT_SECRET ; 

const authorize = function authorizeToken(req,res,next){
const token = req.headers.token;
jwt.verify(token, jwt_secret, (err, decoded) => {
  console.log("token======",token)
    if (err) {
      console.log(err)
      return res.status(403).json({ message: 'Failed to authenticate token' });
    }
    req.userId = decoded.userId;
    next();
  });

}
module.exports = authorize