const express = require("express")
const router = express.Router()
const {emp, getemp, delemp, editemp, updateEmp} = require('../control/empControl')

router.route("/emp").post(emp)
router.route("/getemp").get(getemp)
router.route("/delemp/:id").delete(delemp)
router.route("/editemp").get(editemp)
router.route("/updateEmp").post(updateEmp)

module.exports=router