const mongoose = require("../db.js");

const menuItemsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String
  },
  updatedAt: {
    type: Date
  }
});
menuItemsSchema.set("toJSON", { virtuals: true });
// menu model
const MenuItems = mongoose.model("MenuItems", menuItemsSchema);

const getAll = async () => {
  try {
    const menuItems = await MenuItems.find();
    return menuItems;
  } catch (error) {
    return error;
  }
};

const getOne = async (id) => {
  try {
    const menuItem = await MenuItems.findById(id);
    return menuItem;
  } catch (error) {
    return error;
  }
};

const search = async (query) => {
  try {
    const menuItems = await MenuItems.find({
      $or: [
        {
          name: {
            $regex: query,
            $options: "i"
          }
        },
        {
          description: {
            $regex: query,
            $options: "i"
          }
        }
      ]
    });

    return menuItems;
  } catch (error) {
    return error;
  }
};

const create = async (body) => {
  try {
    const menuItem = await MenuItems.create(body);
    return menuItem;
  } catch (error) {
    return error;
  }
};

const update = async (id, body) => {
  try {
    const menuItem = await MenuItems.findByIdAndUpdate(id, body);

    if (!menuItem) {
      return { error: "Menu item not found" };
    }

    if (body.name) {
      menuItem.name = body.name;
    }
    if (body.price) {
      menuItem.price = body.price;
    }
    if (body.description) {
      menuItem.description = body.description;
    }
    if (body.imageUrl) {
      menuItem.imageUrl = body.imageUrl;
    }

    menuItem.updatedAt = new Date();

    const updateMenuItem = await menuItem.save();
    return updateMenuItem;
  } catch (error) {
    return error;
  }
};

const deleteProduct = async (id) => {
  try {
    const menuItem = await MenuItems.findByIdAndDelete(id);
    return menuItem.id;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAll,
  getOne,
  search,
  create,
  update,
  deleteProduct,
  MenuItems
};
