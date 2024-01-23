const {Router} = require("express");
const { getTasks, saveTask, getTask, updateTask, deleteTask } = require ("../controllers/taskController");

const router = Router();

router.get('/list', getTasks)
router.post('/list', saveTask)
router.get('/list/:id', getTask)
router.put('/list/:id', updateTask)
router.delete('/list/:id', deleteTask)

module.exports = router;