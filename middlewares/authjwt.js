const jwt = require("jsonwebtoken")
const config = require("../configs/auth.config");
const db = require("../models");
const User = db.user;

verifyToken = (req, res, next) => {

    let token = req.headers["x-access-token"];

    //if no token was provided
    if(!token) {
        return res.status(403).send({
            message: "No Token provided"
        });
    }

    jwt.verify(token,  config.secret, (err, decoded) => {
        //if token provided, but the wrong one.
        if(err) {
            return res.status(401).send({
                message: "Unauthorised!"
            });
        }

        req.userId = decoded.id;
        next()
    }) 

}


const isAdmin = (req, res, next) => {

    User.findByPk(req.userId)
    .then(user => {
        user.getRoles()
        .then(roles => {

            for(let i = 0; i< roles.length; i++) {
                if(roles[i].name === "admin") {
                    next();
                    return;
                }
            }

            res.status(403).send({
                message: "Required admin role"
            })

            return;
        })
    })
}

const authjwt = {
    verifyToken: verifyToken,
    isAdmin: isAdmin
}

module.exports = authjwt