const express = require("express");

const router = express.Router();

const directorController = require("../controller/directorController");
const { logging } = require("../middleware/logger");

router.get("/", logging, async (req, res) => {
    const result = await directorController.getDirectors();

    if (result.directors) {
        res.status(result.response.status).json(result.directors);
    } else {
        res.status(result.response.status).json(result.response.text);
    }
});

router.get("/:id", logging, async (req, res) => {
    const id = req.params.id;

    const result = await directorController.getDirector(id);

    if (result.director != null) {
        res.status(result.response.status).json(result.director);
    } else {
        res.status(result.response.status).json(result.response.text);
    }
});

router.post("/", logging, async (req, res) => {
    var director = {};
    var responseMessage;

    if (
        req.body.name &&
        req.body.surname &&
        req.body.gender &&
        req.body.age &&
        req.body.maritalStatus
    ) {
        director = req.body;

        responseMessage = await directorController.insertDirector(director);
    }

    res.status(responseMessage.status).json(responseMessage.text);
});

router.delete("/:id", logging, async (req, res) => {
    const id = req.params.id;

    var result = await directorController.deleteDirector(id);

    res.status(result.status).json(result.text);
});

router.put("/", logging, async (req, res) => {
    const director = req.body;

    var result = await directorController.updateDirector(director);

    if (result.director) {
        res.status(result.response.status).json(result.response.director);
    } else {
        res.status(result.response.status).json(result.response.text);
    }
});

module.exports = router;
