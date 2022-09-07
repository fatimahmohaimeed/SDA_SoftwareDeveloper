const mongoose = require('mongoose');
const ManagerSchema = new mongoose.Schema({
    name: { type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be at least 3 characters"], 
    },
    position: { type: String,
        required: [true,"Description is required"],
        minlength: [3,"Description must be at least 3 characters"]
    }
}, { timestamps: true });
module.exports.Manager = mongoose.model('Manager', ManagerSchema);