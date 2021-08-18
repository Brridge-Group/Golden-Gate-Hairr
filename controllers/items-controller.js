const mongoose = require("mongoose");

const Item = require("../models/item");

const getItems = async (req, res, next) => {
  let items;
  try {
    items = await Item.find();
  } catch (err) {
    const error = new HttpError("Couldn't retrieve items!" + err, 500);
    return next(error);
  }

  res.json({
    items: items.map((item) => item.toObject({ getters: true })),
  });
};

const createItem = async (req, res, next) => {
  console.log(req.body);
  const { name, description } = req.body;

  const createdItem = new Item({
    name,
    description,
  });

  try {
    await createdItem.save();
  } catch (err) {
    const error = new HttpError("Creating item failed, please try again.", 500);
    return next(error);
  }

  res.status(201).json({ item: createdItem });
};

const updateItem = async (req, res, next) => {
  const itemId = req.params.id;

  console.log(req.body);
  const { name, description } = req.body;

  let item;
  try {
    item = await Item.findById(itemId);
  } catch (err) {
    return next(err);
  }

  item.name = name;
  item.description = description;

  try {
    const result = await item.save();
  } catch (err) {
    return next(err);
  }

  res.status(200).json({ item: item.toObject({ getters: true }) });
};

const getItem = async (req, res, next) => {
  let item;

  const itemId = req.params.id;

  try {
    item = await Item.findById(itemId);
  } catch (err) {
    return next(err);
  }

  res.json({ item });
};

const deleteItem = async (req, res, next) => {
  let item;

  const itemId = req.params.id;

  try {
    item = await Item.findById(itemId);
  } catch (err) {
    return next(err);
  }

  try {
    if (item) {
      await item.remove();
    }
  } catch (err) {
    return next(err);
  }
  
  res.json({ message: "Delete successfully" });
};

exports.getItems = getItems;
exports.createItem = createItem;
exports.updateItem = updateItem;
exports.getItem = getItem;
exports.deleteItem = deleteItem;
