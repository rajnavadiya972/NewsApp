const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
userSchema.statics.isThisEmailUse = async function (username) {
    if(!username) throw new Error('cant find username')
    try {
        const user = await this.findOne({username});
        if (user) return false

        return true;
    } catch (error) {
        console.log('error inside',error.message);
        return false;
    }
}
module.exports = mongoose.model('User', userSchema)