const { validationResult, check } = require("express-validator");

exports.registerValidate = () => [
  check("CIN", "Enter a valid Cin").isLength({
    min: 8,
  }),
  check("about", "Enter a small recap about your resume").isLength({
    min: 10,
  }),
  check("proNumber", "Enter a professional Number").isLength({
    min: 3,
  }),
  
  check("adress", "Adress is required!").isLength({
    min: 6,
  }),
  check("ville", "City is required").isLength({
    min: 4,
  }),
  check("vcodePostale", "Postal Code is required").isLength({
    min: 4,
  }),
];
exports.validation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({ errors: errors.array() });
  }
  next();
};

