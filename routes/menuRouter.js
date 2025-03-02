const { Router } = require("express");
const menuController = require("../controllers/menuController");

const menuRouter = Router();

menuRouter.get("/", menuController.getAll);
menuRouter.get("/search", menuController.search);
menuRouter.get("/:id", menuController.getOne);
menuRouter.post("/", menuController.create);
menuRouter.patch("/:id", menuController.update);
menuRouter.put("/:id", menuController.update);
menuRouter.delete("/:id", menuController.deleteProduct);

module.exports = menuRouter;
