const Constants = require("../models/constants");

exports.constantList = (req, res, next) => {
  Constants.find({})
    .exec((err, list_const) => {
      if (err) {
        return next(err);
      }

      res.json(list_const );
    });
};

exports.createConstant = (req, res, next) => {
  const constant = new Constants({
    symbol: req.body.symbol,
    name: req.body.name,
    value: req.body.value,
    unit: req.body.unit,
  });

  constant.save((err, result) => {
    if (err) {
      next(err);
    }
    res.redirect("/api/constants");
  });
};

