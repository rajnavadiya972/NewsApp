const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    },
    avtar: {
        type: Buffer
    }
})

userSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        bcrypt.hash(this.password, 8, (err, hash) => {
            if (err) return next(err);
            this.password = hash;
            next();
        })
    }
    if (this.isModified('confirmPassword')) {
        bcrypt.hash(this.password, 8, (err, hash) => {
            if (err) return next(err);
            this.confirmPassword = hash;
            next();
        })
    }
})


userSchema.methods.comparePassword = async function (password) {
    if (!password) throw new Error('Password is mission,can not compare');

    try {
        const result = await bcrypt.compare(password, this.password);
        return result;
    } catch (error) {
        console.log('Error while comparing' + error.message);
    }
}

userSchema.statics.isThisEmailInUse = async function (email) {
    if (!email) throw new Error('Inavlid email')
    try {
        const user = await this.findOne({ email })
        if (user) return false;
        return true;
    } catch (err) {
        console.log('error inside isThisEmailInUse', err.message)
        return false
    }
}

module.exports = mongoose.model('user', userSchema)