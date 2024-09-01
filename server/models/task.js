import mongoose, { Schema } from "mongoose";
import moment from 'moment-timezone';


const taskSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, default: new Date() },
    duedate: { type: Date, default: new Date() },
    priority: {
        type: String,
        default: "low",
        enum: ["high", "medium", "low"],
    },
    stage: {
        type: String,
        default: "todo",
        enum: ["todo", "in progress", "completed"],
    },
    activities: [{
        type: {
            type: String,
            default: "assigned",
            timestamps: true,
            enum: ["assigned", "started", "in progress", "bug", "completed", "commented"],

        },
        activity: String,
        date: { type: Date, default: new Date() },
        by: { type: Schema.Types.ObjectId, ref: "User" },

    },
    ],

    subTasks: [
        {
            title: String,
            date: Date,
            tag: String,
        },
    ],
    assets: [String],
    team: [{ type: Schema.Types.ObjectId, ref: "User" }],

    isTrashed: { type: Boolean, default: false },


},
    { timestamps: true }


);

const Task = mongoose.model("Task", taskSchema);

export default Task;

console.log(moment().tz('Asia/Kolkata').format());
