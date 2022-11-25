const db = require("../models");
const config = require("../configs/auth.config")
const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken")
var bcrypt = require("bcryptjs")

exports.signup = (req, res) => {

    User.create({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 9)
    })
    .then(user => {

        if(req.body.roles) {
            Role.findAll({
                where: {
                    name: {
                        [Op.or] : req.body.roles
                    }
                }
            })
            .then(roles => {
                //populate user_roles table

                user.setRoles(roles)
                .then(() => {
                    res.status(200).send({message: "User registered successfully"})
                })
            })
        }
    })
    .catch(err => {
        res.status(500).send("Unable to add the user " + err.message)
    }) 
}


exports.signin = (req, res) => {

    User.findOne({
        where: {
            username: req.body.username
        }
    })
    .then(user => {

        if (!user) {
            res.status(404).send({ message: "User not found"})
        }

        //vheck if the password is valid or not
        var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

        if(!passwordIsValid) {
            return res.status(401).send({
                messsage: "Invalid password"
            })
        }

        //if both username and password are valid, create the token

        var token = jwt.sign({id: user.id}, config.secret, {expiresIn: 86400})

        res.status(200).send({

            username: user.username,
            accesstoken: token
        })
    })
    .catch(err => {
        res.status(500).send({
            message: err.message
        })
    })
}