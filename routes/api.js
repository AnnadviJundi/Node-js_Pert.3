//import StudentController
const StudentController = require("../controllers/StudentController");

// import Express
const express = require('express');

// buat object router
const router = express.Router();

// buat routing 
router.get("/", (req, res) => {
    res.send("Hello World");
});


// buat routing student
router.get("/student",StudentController.index);
router.post("/student",StudentController.store);
router.put("/student/:id",StudentController.update);
router.delete("/student/:id",StudentController.destroy);

//export routing
module.exports = router;