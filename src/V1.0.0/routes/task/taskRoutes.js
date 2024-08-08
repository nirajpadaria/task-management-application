const express = require("express");
const router = new express.Router();
const task = require("../../controller/task/taskController");

router.post("", async (req, res, next) => {
  const options = req.body;
  try {
    const result = await task.taskAdd(options);
    res.status(`${result.code}`).send({ ...result });
    return next(JSON.stringify(result));
  } catch (err) {
    return next(err);
  }
});

router.get("", async (req, res, next) => {
  try {
    const result = await task.taskList();
    res.status(`${result.code}`).send({ ...result });
    return next(JSON.stringify(result));
  } catch (err) {
    return next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const result = await task.taskGet(id);
    res.status(`${result.code}`).send({ ...result });
    return next(JSON.stringify(result));
  } catch (err) {
    return next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  const options = { id: req.params.id, body: req.body };
  try {
    const result = await task.taskUpdate(options);
    res.status(`${result.code}`).send({ ...result });
    return next(JSON.stringify(result));
  } catch (err) {
    return next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  const options = req.params.id;
  try {
    const result = await task.taskDelete(options);
    res.status(`${result.code}`).send({ ...result });
    return next(JSON.stringify(result));
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
