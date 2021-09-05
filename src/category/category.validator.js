const Joi =require("joi")
exports.validateCategoryRequest = async function(req, res, next) {
    const schema =Joi.object({
        name: Joi.string().required(),
        description: Joi.string().required()
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