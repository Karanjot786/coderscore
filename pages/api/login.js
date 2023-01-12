import User from "../../models/User"
import connectDB from "../../middleware/mongoose"
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');

const handler = async (req, res) => {
    if (req.method == 'POST') {
        console.log(req.body);
        let user = await User.findOne({"email": req.body.email})
        const bytes  = CryptoJS.AES.decrypt(user.password, process.env.NEXT_PUBLIC_SKEY);
        let originalText = bytes.toString(CryptoJS.enc.Utf8);
        if(user){
        if(req.body.email == user.email && req.body.password == originalText){
            var token = jwt.sign({email:user.email, name:user.name}, process.env.NEXT_PUBLIC_JWT, {expiresIn : '2d'})
            res.status(200).json({ success: true, token })
            
        }
        else{

            res.status(200).json({ success: false, error: "Invalid credentials" })
        }
    }
    else{
        res.status(200).json({ success: false, error: "User not found" })

    }
    }
    else {
        res.status(400).json({ error: "This method is not allowed" })

    }
}


export default connectDB(handler);