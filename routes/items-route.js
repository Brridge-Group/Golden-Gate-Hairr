const express = require("express");

const itemsController = require("../controllers/items-controller");

const router = express.Router();

// Get All Items
router.get("/", itemsController.getItems);

// Get an Item
router.get("/:id", itemsController.getItem);

//Create new item
router.post("/", itemsController.createItem);

//Update item
router.patch("/:id", itemsController.updateItem);

//Delete item
router.delete("/:id", itemsController.deleteItem);

module.exports = router;
