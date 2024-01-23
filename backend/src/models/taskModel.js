const mongoose = require('mongoose');
const { Schema } = mongoose;

const TaskSchema = new Schema({
    id:{
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    done: {
        type: Boolean,
        require: true
    }
});

const TaskListSchema = new Schema({
    list:{
        type: [TaskSchema],
        default: undefined
    }
});

module.exports = mongoose.model('task', TaskListSchema);