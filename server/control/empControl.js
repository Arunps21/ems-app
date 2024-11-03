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

const delemp = async (req, res) => {
  try {
    console.log("Data to be deleted:", req.params.id);
    const id = req.params.id;

    const result = await empModel.deleteOne({ _id: id });

    if (result.deletedCount === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Employee not found" });
    }

    res.json({ success: true, message: "Data deleted successfully" });
  } catch (error) {
    console.error("Error deleting data:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const editemp = async (req, res) => {
  const id = req.headers.id;
  const data = await empModel.find({ _id: id });
  res.json(data);
};

const updateEmp = async (req, res) => {
  const id = req.headers.id;
  const {name, des, sal, exp} = req.body
  await empModel.updateOne({ _id: id }, { name, des, sal, exp });
  res.json("Data updated succesfully");
};

module.exports = { emp, getemp, delemp, editemp, updateEmp };
