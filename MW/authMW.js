const jwt = require("jsonwebtoken")

module.exports = async(req, res, next) => {
    if(!req.get("authorization"))
    {
        let err = new Error("Not Authenticated");
        err.statusCode = 403;
        next(err);
        return;
    }
    let token = req.get("authorization").split(" ")[1];
    try{
        let decodedToken = jwt.verify(token, process.env.SECRET_KEY);
        req.token = decodedToken;
        next();
    }
    catch(err)
    {
        err.statusCode = 401;
        err.message = "Not Authenticated";
        next(err);
    } 
}

module.exports.isAdmin = (req, res, next) =>{
    if(req.token.role != "teacher") // don't forget to change it to admin
    {
        let err = new Error("Not Authorized");
        err.statusCode = 403;
        next(err);
    }
    else
        next();
}