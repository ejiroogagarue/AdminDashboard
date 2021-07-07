const express = require("express");
const router = express.Router();
// VALIDATOR
const {userValidator} = require("../validator/reportValidator");
// CONTROLLERS
const {register} = require("../controllers/auth");



router.post("/auth", validateUser, register);



module.exports = router;
