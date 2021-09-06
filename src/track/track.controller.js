const model = require("./track.model");

exports.listTracks = async (req, res) => {
  try {
    const data = await model
      .find(req.query.id ? { _id: req.query.id } : {})
      .skip(Number(req.query.skip))
      .limit(Number(req.query.limit))
      .sort({ createdDate: -1 });
    return res.status(200).json({
      msg: "success",
      data: data,
    });
  } catch (err) {
    return res.status(500).json({ msg: "failed" });
  }
};
exports.addTrack = async (req, res) => {
  try {
    const albumModel = new model({
      name: req.body.name,
      singer: req.body.singer,
      category: req.body.category,
      album: req.body.album,
    });

    await albumModel.save();
    return res.status(200).json({ msg: "success" });
  } catch (err) {
    return res.status(500).json({ msg: "failed" });
  }
};

exports.updateTrack = async (req, res) => {
    try {
      await model.findByIdAndUpdate(req.params.trackid, {...req.body,updatedDate: new Date()});

      return res.status(200).json({ msg: "success" });
    } catch (err) {
      return res.status(500).json({ msg: "failed" });
    }
  };
  
  exports.deleteTrack = async (req, res) => {
    try {
      await model.findByIdAndRemove(req.params.trackid);
      return res.status(200).json({ msg: "success" });
    } catch (err) {
      return res.status(500).json({ msg: "failed" });
    }
  };
  