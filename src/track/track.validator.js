const Joi =require("joi")
exports.validateTrackRequest = async function(req, res, next) {
    const schema =Joi.object({
        name: Joi.string().required(),
        singer: Joi.string().required(),
        category: Joi.string().optional(),
        album: Joi.string().optional(),

    })
    try {
        const { error } = schema.validate(req.body);
        if (error) {
          return res.send(error.details[0].message);
        }
        next();
    }catch (err) {
        return res.json({ err });

    }
}