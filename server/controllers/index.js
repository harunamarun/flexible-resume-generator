const express = require("express");

const router = express.Router();

const resumeRouter = require("./resume");

module.exports = models => {
  router.use("/resumes", resumeRouter(models));

  return router;
};
