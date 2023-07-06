const models = require("../models");

const browse = (req, res) => {
  models.viewer
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("error retrieving data from database");
    });
};

const read = (req, res) => {
  models.viewer
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.send(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("error retrieving data from database");
    });
};

const edit = (req, res) => {
  const viewer = req.body;
  viewer.id = parseInt(req.params.id, 10);
  models.viewer
    .update(viewer)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("error retrieving data from database");
    });
};

const add = (req, res) => {
  const viewer = req.body;
  models.viewer
    .inset(viewer)

    .then(([result]) => {
      res.location(`/viewer/${result.insertId}`).sendStatus(204);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("error retrieving data from database");
    });
};

const destroy = (req, res) => {
  const viewer = req.body;
  viewer.id = parseInt(req.params.id, 10);
  models.viewer
    .delete(viewer)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("error retrieving data from database");
    });
};

module.export = {
  browse,
  read,
  edit,
  add,
  destroy,
};
