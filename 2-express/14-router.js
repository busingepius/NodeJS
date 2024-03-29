const express = require("express");
const router = express.Router();
const {getPeople,createPerson,updatePerson,deletePerson}=require("./controller");

router.route("/api/people").get(getPeople).post(createPerson);
router.route("/api/people/:personID").patch(updatePerson).delete(deletePerson);

module.exports = router;