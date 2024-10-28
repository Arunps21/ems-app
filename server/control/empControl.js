const empModel = require("../model/empModel");

const emp = (req, res) => {
  const { name, des, sal, exp } = req.body;

  empModel
    .create({
      name,
      des,
      sal,
      exp,
    })
    .then(() => {
      res.send({
        status: 200,
        msg: "Employee added successfully",
      });
    })
    .catch((error) => {
      console.error("Error adding employee:", error);
      res.status(500).send({
        status: 500,
        msg: "Failed to add employee",
      });
    });
};

const getemp = async (req, res) => {
  try {
    const getEmp = await empModel.find();
    res.json(getEmp.length > 0 ? getEmp : []);
  } catch (error) {
    console.error("Error fetching employees:", error);
    res.status(500).send({
      status: 500,
      msg: "Failed to fetch employees",
    });
  }
};

module.exports = { emp, getemp };
