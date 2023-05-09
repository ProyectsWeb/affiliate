const { Schema, model, models } = require("mongoose");

const userSchema = new Schema({
    nombre: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true
    }
},{
    timestamps: true
})

export default models.User || model('User', userSchema);