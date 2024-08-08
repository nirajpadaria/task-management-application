const express = require("express");
const router = new express.Router();
const projects = require("../../controller/project/projectsController");

router.post("", async (req, res, next) => {
  const options = req.body;
  try {
    const result = await projects.projectsAdd(options);
    res.status(`${result.code}`).send({ ...result });
    return next(JSON.stringify(result));
  } catch (err) {
    return next(err);
  }
});

router.get("", async (req, res, next) => {
  try {
    const result = await projects.projectsList();
    res.status(`${result.code}`).send({ ...result });
    return next(JSON.stringify(result));
  } catch (err) {
    return next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const result = await projects.projectsGet(id);
    res.status(`${result.code}`).send({ ...result });
    return next(JSON.stringify(result));
  } catch (err) {
    return next(err);
  }
});

router.get("/:id/tasks", async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await projects.projectsTaskGet(id);
      res.status(`${result.code}`).send({ ...result });
      return next(JSON.stringify(result));
    } catch (err) {
      return next(err);
    }
  });

router.put("/:id", async (req, res, next) => {
  const options = { id: req.params.id, body: req.body };
  try {
    const result = await projects.projectsUpdate(options);
    res.status(`${result.code}`).send({ ...result });
    return next(JSON.stringify(result));
  } catch (err) {
    return next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  const options = req.params.id;
  try {
    const result = await projects.projectsDelete(options);
    res.status(`${result.code}`).send({ ...result });
    return next(JSON.stringify(result));
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
