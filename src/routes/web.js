const { Router } = require("express");
const userData = require("../controllers/user");

const router = Router();

router.get("/addname", userData.getAddPAge);
router.post("/addname", userData.addUser);

router.get("/list", userData.allList);

router.get("/edit/:id", userData.editData);

router.post("/update/:id", userData.update);
router.get("/delete/:id", userData.deleteData);

module.exports = router;
