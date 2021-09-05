const express = require("express");
const router = express.Router();
const validation = require("./category.validator");
const controller = require("./category.controller");

router.get("/list/category", controller.listCategory);
router.post("/add/category",validation.validateCategoryRequest,controller.addCategory);
router.put("/update/category/:categoryId", controller.updateCategory);
router.delete("/delete/category/:categoryId", controller.deleteCategory);

module.exports = router;
