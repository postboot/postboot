const db = require("../../models");
const router = require("express").Router();
const isAuthenticated = require("../../config/middleware/isAuthenticated");

/**
 * Project - Read All
 */
router.get("/", isAuthenticated, function (req, res) {
  db.Project.findAll({include: db.User})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

/**
 * Project - Read One
 */
router.get("/:id", isAuthenticated, function (req, res) {
  db.Project.findById(req.params.id)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

/** 
 * Project - Create
 * Notice how we are also taking in the User Id! Important!
 */
router.post("/", isAuthenticated,  function (req, res) {
  if(req.user === null || req.user.id === null){
    res.status(401).json("NOT AUTHORIZED");
  }
  db.Project.create({
    UserId: req.user.id,
    ...req.body
  })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

/**
 * Project - Update
 */
router.put("/:id", isAuthenticated, function (req, res) {
  db.Project.update(req.body, { where: { id: req.params.id } })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

/**
 * Project - Delete
 */
router.delete("/:id", isAuthenticated, function (req, res) {
  db.Project.destroy({ where: { id: req.params.id } })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

// Defining methods for the booksController
module.exports = router;
