const Tasks = require("../model/tasks");
async function getAllTasks(req,res){
    const tasks = await Tasks.find({});
    return res.status(200).json({tasks});
}

async function getTask(req,res){
    const {id:taskID} = req.params;
    const tasks = await Tasks.findOne({_id:taskID});
    if(!tasks){
        return res.status(404).send(`no tasks with ${taskID}`);
    }
    return res.status(200).json({tasks});
}

async function createTask(req,res){
    const tasks = await Tasks.create(req.body);
    return res.status(201).json({tasks});
}

async function updateTask(req,res){
    const update =  req.body;
    const {id:taskID} = req.params;
    const tasks = await Tasks.findOneAndUpdate({_id:taskID},update,{new:true,runValidators:true});
    if(!tasks){
        return res.status(404).send(`no such task ${taskID}`);
    }
    return res.status(200).send({tasks});
}

async function deleteTask(req,res){
    const {id:taskID} = req.params;
    const tasks = await Tasks.findOneAndDelete({_id:taskID});
    if(!tasks){
        return res.status(404).send(`no task with id:- ${taskID}`);
    }
    return res.status(200).json({tasks});
}

module.exports = {getAllTasks,getTask,createTask,updateTask,deleteTask};