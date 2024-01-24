const userModel = require('../model/userMobel');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
exports.signup = async (req, res) => {
    try {
        let { name, email, password } = req.body
        if (!name || !email || !password) {
            return res.send({
                success: false,
                message: "fill all filds !"
            })
        }
        let user = await userModel.findOne({ email: email });
        if (user) {
            return res.send({
                success: false,
                message: "email is already exists"
            })
        } else {

            password = await bcrypt.hash(password, 10);
            user = new userModel({ name, email, password });
            await user.save()
            return res.send({
                success: true,
                message: "signup suceessful !",
                user
            })
        }
    } catch {
        return res.send({
            success: false,
            message: "Unexpected Error !"
        })
    }
}
exports.signin = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.send({
                success: false,
                message: "fill all filds !"
            })
        }

        let user = await userModel.findOne({ email: email });
        if (!user) {
            return res.send({
                success: false,
                message: "Invalid credintials"
            })
        }
        const userIs = await bcrypt.compare(password, user.password)
        if (!userIs) {
            return res.send({
                success: false,
                message: "Invalid credintials"
            })
        }


        const token = await jwt.sign({ id: user._id }, process.env.JWT_KEY)
        await userModel.updateOne({ email: email }, { $set: { tokens: token } })
        return res.cookie('token', token).send({
            success: true,
            message: "signin suceessful !",
            user
        })


    } catch {
        return res.send({
            success: false,
            message: "Unexpected Error !"
        })
    }

}

exports.verify =(req,res)=>{
    const user = req.user;
return res.send({
    success:"true",
    message:"User Found !",
    user
})
}

exports.signout = async (req, res) => {
    return res.clearCookie('jwt').send({
        success: true,
        message: "Signout Sucessful !"
    })
}

