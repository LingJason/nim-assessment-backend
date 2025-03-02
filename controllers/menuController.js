const MenuItems = require("../db/models/menuItems.js");

const getAll = async (req, res) => {
  try {
    const menu = await MenuItems.getAll();
    res.send(menu);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getOne = async (req, res) => {
  try {
    const menu = await MenuItems.getOne(req.params.id);
    res.send(menu);
  } catch (error) {
    res.status(500).send(error);
  }
};

const search = async (req, res) => {
  try {
    const menu = await MenuItems.search(req.query.q);
    res.send(menu);
  } catch (error) {
    res.status(500).send(error);
  }
};

const create = async (req, res) => {
  try {
    const menu = await MenuItems.create(req.body);
    res.send(menu);
  } catch (error) {
    res.status(500).send(error);
  }
};

const update = async (req, res) => {
  try {
    const menuItem = await MenuItems.update(req.params.id, req.body);
    res.send(menuItem);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const menuItem = await MenuItems.deleteProduct(req.params.id);
    res.send(menuItem);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { getAll, getOne, search, create, update, deleteProduct };
