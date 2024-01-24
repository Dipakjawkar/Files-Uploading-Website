const jwt = require('jsonwebtoken')
const userModel = require('../model/userMobel')

exports.userMiddleware = async (req, res, next) => {
    try {
        const cToken = req.cookies.token
        console.log(cToken)
        if (!cToken) {
            return res.send({
                message: "Plese login your account !",
                success: false
            })
        }
        const id = await jwt.verify(cToken, process.env.JWT_KEY)
        if (!id) {
            return res.send({
                message: "Plese login your account !",
                success: false
            })
        }
        console.log(id)
        const user = await userModel.findOne({ _id: id.id })
        if (!user) {
            return res.send({
                message: "Plese login your account !",
                success: false
            })
        }
        console.log(user)
        req.user = user;
        next();
    } catch (e) {
        return res.send({
            success: false,
            message: "Server Callback error !"
        })
    }
}