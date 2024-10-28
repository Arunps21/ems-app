const express = require("express")
const router = express.Router()
const {emp,getemp} = require('../control/empControl')

router.route("/emp").post(emp)
router.route("/getemp").get(getemp)

module.exports=router