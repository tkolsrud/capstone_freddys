const db = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const match = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

const register = async (req, res) => {
    try {
        const foundUser = await db.User.findOne({ email: req.body.email });

        if (!req.body.email)
            return res.status(500).json({
                error: 'Please Provide An Email'
            });

        // if (req.body.email != match)
        //     return res.status(500).json({
        //         error: 'Please Provide A Valid Email'
        //     });

        if (req.body.password2 !== req.body.password)
            return res.status(500).json({
                error: 'Passwords Do Not Match'
            });

        if (foundUser)
            return res.status(400).json({
                error: 'Email Taken'
            });


        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, salt);
        const createdUser = await db.User.create({ ...req.body, password: hash });

        return res
            .status(201)
            .json({ status: 201, message: "success", createdUser });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 500,
            error: "Something went wrong. Please try again"
        });
    }
};

const login = async (req, res) => {
    try {
        const foundUser = await db.User.findOne({ email: req.body.email }).select(
            "+password"
        );

        if (!foundUser) {
            return res
                .status(400)
                .json({ status: 400, error: "No Account Associated With Provided Email" });
        }

        const isMatch = await bcrypt.compare(req.body.password, foundUser.password);
        // check if the passwords match
        if (isMatch) {
            //TODO create a json web token and send response
            const signedJwt = await jwt.sign(
                {
                    _id: foundUser._id,
                    admin: foundUser.admin
                },
                'process.env.JWT_SECRET',
                {
                    expiresIn: '1d',
                }
            );
            return res.status(200).json(
                {
                    message: "success",
                    id: foundUser._id,
                    admin: foundUser.admin,
                    signedJwt,
                }
            );
        } else {
            // the password provided does not match the password on file.
            return res.status(400).json({
                status: 400,
                error: "Username or Passord Incorrect"
            })
        }
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Something went wrong. Plase try again",
        });
    }
};

module.exports = {
    register,
    login,
};
