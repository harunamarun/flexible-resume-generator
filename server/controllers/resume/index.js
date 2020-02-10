const express = require("express");

module.exports = models => {
  /**
   * Controller Logic
   */
  const createResume = (req, res) =>
    models.resumes
      .create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        address: req.body.address,
        gender: req.body.gender,
        career1: req.body.career1,
        career1_description: req.body.desc1,
        career2: req.body.career2,
        career2_description: req.body.desc2,
        template: req.body.template
      })
      .then(resume => res.status(201).json(resume.serialize()))
      .catch(err => {
        return res.status(400).send(err.message);
      });

  const listResumes = (req, res) =>
    models.resumes
      .list()
      .then(resumes => resumes.map(resume => resume.serialize()))
      .then(resumes => res.status(200).json(resumes))
      .catch(err => res.status(400).send(err.message));

  const getResume = (req, res) =>
    models.resumes
      .get({ id: req.params.id })
      .then(resume => resume.serialize())
      .then(resume => res.status(200).json(resume))
      .catch(err => res.status(400).send(err.message));

  const deleteResume = (req, res) =>
    models.resumes
      .delete({ id: req.params.id })
      .then(() => res.send("ok"))
      .catch(err => res.status(400).send(err.message));

  /**
   * Routes
   */
  const router = express.Router();
  router.post("/", createResume);
  router.get("/", listResumes);
  router.get("/:id/", getResume);
  router.delete("/:id/", deleteResume);

  return router;
};
