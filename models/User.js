import {mongoose} from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {type: String, require: true},
    email: {type: String, require: true, unique: true},
    password: {type: String, require: true}
}, {timestamps: true});


// mongoose.model ={} unique: true
// export default mongoose.model("User", UserSchema);
// export default mongoose.models.User || mongoose.model("User", UserSchema);
module.exports = mongoose.models.User || mongoose.model('User',UserSchema)