const express = require("express");
const router = new express.Router();
const user = require("../../controller/user/userController");

router.post("", async (req, res, next) => {
  const options = req.body;
  try {
    const result = await user.userAdd(options);
    res.status(`${result.code}`).send({ ...result });
    return next(JSON.stringify(result));
  } catch (err) {
    return next(err);
  }
});

router.get("", async (req, res, next) => {
  try {
    const result = await user.userList();
    res.status(`${result.code}`).send({ ...result });
    return next(JSON.stringify(result));
  } catch (err) {
    return next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const result = await user.userGet(id);
    res.status(`${result.code}`).send({ ...result });
    return next(JSON.stringify(result));
  } catch (err) {
    return next(err);
  }
});

router.get("/:id/projects", async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await user.userProjectsGet(id);
      res.status(`${result.code}`).send({ ...result });
      return next(JSON.stringify(result));
    } catch (err) {
      return next(err);
    }
  });

router.put("/:id", async (req, res, next) => {
  const options = { id: req.params.id, body: req.body };
  try {
    const result = await user.userUpdate(options);
    res.status(`${result.code}`).send({ ...result });
    return next(JSON.stringify(result));
  } catch (err) {
    return next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  const options = req.params.id;
  try {
    const result = await user.userDelete(options);
    res.status(`${result.code}`).send({ ...result });
    return next(JSON.stringify(result));
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
