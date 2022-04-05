var db = require("../models/index");
const Users = db.users;

exports.getAddPAge = async (req, res) => {
  try {
    res.render("addname", {
      bodyData: req.body,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.addUser = async (req, res) => {
  try {
    const { name, email, fees, age, number } = req.body;
    console.log(req.body.name);
    let data = await Users.create({
      name: name,
      email: email,
      fees: fees,
      age: age,
      number: number,
    });
    return res.render("addname");
    console.log(data.dataValues);
    // let response = {
    //   data: "ok",
    // };
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

// exportas.adduserData a

exports.allList = async (req, res) => {
  try {
    const perPage = 5;
    const page = req.params.page || 1;
    data = await Users.findAll({});
    res.render("index", {
      bodyData: undefined,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.editData = async (req, res) => {
  // let data = await Users.findByPk(id)
  // let response = {
  //   data:data
  // }
  // res.render("edit",response)

  try {
    await Users.findByPk(req.params.id).then(function (users) {
      console.log(users);
      res.render("edit", {
        data: users,
      });
    });
  } catch (error) {
    console.log(error);
  }
};

exports.update = async (req, res) => {
  try {
    const { name, email, fees, age, number } = req.body;
    console.log(req.body);
    const result = await Users.update(
      { name: name, email: email, fees: fees, age: age, number: number },
      { where: { id: req.params.id } }
    );
    return res.redirect("/list");
  } catch (error) {
    console.log(error);
  }
};

exports.deleteData = async (req, res) => {
  try {
    await Users.destroy({ where: { id: req.params.id } });
    return res.redirect("/list");
  } catch (error) {
    console.log(error);
  }
};
