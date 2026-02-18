import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },

    description: {
        type: String,
        required: true
    },

    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: null
    },

    status: {
        type: String,
        enum: ["pending", "approved", "rejected"],
        default: "pending"
    },
    progress: {
        type: Number,
        default: 0,
        min: 0,
        max: 100
    },

    remarks: {
        type: String,
        default: ""
    },
    projectStatus: {
        type: String,
        enum: ["not-started" , "in-progress", "completed"],
        default: "not-started"
    }
},
{ timestamp: true }
);

const Project = mongoose.model("Project", projectSchema);

export default Project;