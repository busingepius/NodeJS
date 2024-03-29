const {people} = require("../data");

function getPeople(req, res) {
    res.status(200).json({success: true, data: people});
}

function createPerson(req, res) {
    const {name} = req.body;
    const newPerson = {"id": 7, "name": name};
    res.status(201).json({success: true, data: newPerson});
}

function updatePerson(req, res) {
    const {personID} = req.params;
    const {name} = req.body;
    const newPerson = {"id": personID, name};
    res.status(202).json({success: true, data: newPerson});
}

function deletePerson(req, res) {
    const {personID} = req.params;
    res.status(202).json({success: true, data: "deleted"});
}

module.exports = {getPeople, createPerson, updatePerson, deletePerson};