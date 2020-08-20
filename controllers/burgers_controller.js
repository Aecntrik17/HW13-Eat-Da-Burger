const express = require("express");
// connecting to the model
const burger = require("../models/burger");

const router = express.Router();

router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    const hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function (req, res) {
  burger.insertOne(req.body, function (result) {
    //
    res.status(200).end();
  });
});

router.put("/api/burgers/:id", function (req, res) {
  const condition = { id: req.params.id };

  console.log("condition", condition);

  burger.updateOne(
    {
      devoured: true,
    },
    condition,
    function (result) {
      res.status(200).end();
    }
  );
});

module.exports = router;
