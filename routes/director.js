const express = require("express");

const router = express.Router();

const directorController = require("../controller/directorController");
const { logging } = require("../middleware/logger");

router.get("/", logging, async (req, res) => {
  try {
    const directors = await directorController.getDirectors();

    res.status(200).json(directors);
  } catch (error) {
    res.status(500).json({ error: error?.message || "internal server error" });
  }
});

router.get("/:id", logging, async (req, res) => {
  const id = req.params.id;

  try {
    const director = await directorController.getDirector(id);

    if (!director) {
      return res.status(404).json({ error: "not found" });
    }

    res.status(200).json(director);
  } catch (error) {
    res.status(500).json({ error: error?.message || "internal server error" });
  }
});

router.post("/", logging, async (req, res) => {
  directorParams = req.body;

  try {
    const existingDirector = await directorController.getDirector(
      null,
      directorParams.name,
      directorParams.surname
    );

    if (existingDirector) {
      return res.status(200).json(existingDirector);
    }

    const director = await directorController.insertDirector(directorParams);

    res.status(201).json(director);
  } catch (error) {
    res.status(500).json({ error: error?.message || "internal server error" });
  }
});

router.delete("/:id", logging, async (req, res) => {
  const id = req.params.id;

  try {
    const director = await directorController.getDirector(id);
    if (!director) {
      return res.status(404).json({ error: `id: ${id} is not found` });
    }

    await directorController.deleteDirector(id);

    res.status(200).json({ message: `id: ${id} is deleted!` });
  } catch (error) {
    res.status(404).json({ error: error?.message });
  }
});

router.put("/", logging, async (req, res) => {
  const director = req.body;

  try {
    const updatedDirector = await directorController.updateDirector(director);

    if (updatedDirector) {
      return res.status(200).json(updatedDirector);
    }
  } catch (error) {
    res.status(404).json({ error: error?.message });
  }
});

module.exports = router;
