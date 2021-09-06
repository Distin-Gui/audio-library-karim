const model = require("./album.model");

exports.listALbums = async (req, res) => {
  try {
    const data = await model
      .find(req.query.id?{_id:req.query.id}:{})
      .skip(Number(req.query.skip))
      .limit(Number(req.query.limit))
      .sort({ 'createdDate': -1 });
    return res.status(200).json({
      msg: "success",
      data: data,
    });
  } catch (err) {
    return res.status(500).json({ msg: "failed" });
  }
};

exports.addAlbum = async (req, res) => {
  try {
    const albumModel = new model({
      name: req.body.name,
      description: req.body.description,
      showNbTracks: req.body.showNbTracks,
    });

    await albumModel.save();
    return res.status(200).json({ msg: "success" });
  } catch (err) {
    return res.status(500).json({ msg: "failed" });
  }
};

exports.updateAlbum = async (req, res) => {
  try {
    
    await model.findByIdAndUpdate(req.params.albumid, {...req.body,updatedDate: new Date()});
    // findOneAndUpdate({ _id: req.params.albumid }, req.body)
    // updateOne({ _id: req.params.albumid }, { $set: { name: req.body.name } })
    return res.status(200).json({ msg: "success" });
  } catch (err) {
    return res.status(500).json({ msg: "failed" });
  }
};

exports.deleteAlbum = async (req, res) => {
  try {
    await model.findByIdAndRemove(req.params.albumid);
    return res.status(200).json({ msg: "success" });
  } catch (err) {
    return res.status(500).json({ msg: "failed" });
  }
};
