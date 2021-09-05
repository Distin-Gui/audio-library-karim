const model = require("./category.model");

exports.listCategory = async (req, res) => {
  try {
    const data = await model
      .find(req.query.id ? { _id: req.query.id } : {})
      .skip(Number(req.query.skip))
      .limit(Number(req.query.limit))
      .sort({ createdDate: 1 });
    return res.status(200).json({
      msg: "success",
      data: data,
    });
  } catch (err) {
    return res.status(500).json({ msg: "failed" });
  }
};

exports.addCategory = async (req, res) => {
  try {
    const categoryModel = new model({
      name: req.body.name,
      description: req.body.description,
    });
    await categoryModel.save();
    return res.status(200).json({ msg: "success" });
  } catch (err) {
    return res.status(500).json({ msg: "failed"+err });
  }
};

exports.updateCategory = async (req, res) => {
    try {
        await model.findByIdAndUpdate(req.params.categoryId,req.body)
        return res.status(200).json({ msg: "success" });
    }
    catch (err) {
        return res.status(500).json({ msg: "failed: "+err})
    }
}

exports.deleteCategory =async(req, res)=>{
    try {
        await model.findByIdAndRemove(req.params.categoryId)
        return res.status(200).json({ msg: "success" });
    }
    catch (err) {
        return res.status(500).json({ msg: "failed: "+err})
    }
}