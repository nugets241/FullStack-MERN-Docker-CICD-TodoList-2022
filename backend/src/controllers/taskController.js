const taskModel = require("../models/taskModel");

module.exports.getTasks = async (req, res) => {
  const tasks = await taskModel.find();
  res.send(tasks);
};

module.exports.saveTask = async (req, res) => {
  const task = new taskModel({
    list: req.body,
  });

  task
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
};

module.exports.getTask = async (req, res) => {
  try {
    const task = await taskModel.findById(req.params.id);
    res.json(task);
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports.updateTask = async (req, res) => {
  const task = {
    list: req.body,
  };

  console.log(task);
  taskModel.findByIdAndUpdate({ _id: req.params.id }, task).then(() => {
    taskModel.findOne({ _id: req.params.id }).then((task) => res.json(task));
  });
};

module.exports.deleteTask = async (req, res) => {
  try {
    const removedTask = await taskModel.findByIdAndDelete(req.params.id);
    if (!removedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json({ message: "Task deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// original update
// module.exports.updateTask = async (req, res) => {
//     const {_id} = req.params.id;
//     const { name } = req.body;
//     taskModel.findByIdAndUpdate(_id, {name})
//     .then(()=> res.send("Updated Successfully..."))
//     .catch((err) => console.log(err))
// }
