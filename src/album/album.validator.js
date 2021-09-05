const Joi = require("joi");

exports.validateAlbumRequest = async function (req, res, next) {
  const schema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    showNbTracks: Joi.number().optional()
  });
  try {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.send(error.details[0].message);
    }
    next();
  } catch (E) {
    return res.json({ E });
  }
};
