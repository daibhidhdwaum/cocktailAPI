const recipes = require("../data");

module.exports = (app) => {
  app.get("/api/v1/recipes", (req, res) => {
    res.json(recipes);
  });
};
