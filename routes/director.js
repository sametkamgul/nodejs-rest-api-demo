const express = require("express");

const router = express.Router();

const directorService = require("../service/directorService");
const { logging } = require("../middleware/logger");
const authentication = require("../middleware/authentication");

router.get("/", authentication, logging, async (req, res) => {
  try {
    const directors = await directorService.getDirectors();

    res.status(200).json(directors);
  } catch (error) {
    res.status(500).json({ error: error?.message || "internal server error" });
  }
});

router.get("/:id", authentication, logging, async (req, res) => {
  const id = req.params.id;

  try {
    const director = await directorService.getDirector(id);

    if (!director) {
      return res.status(404).json({ error: "not found" });
    }

    res.status(200).json(director);
  } catch (error) {
    res.status(500).json({ error: error?.message || "internal server error" });
  }
});

router.post("/", authentication, logging, async (req, res) => {
  directorParams = req.body;

  try {
    const existingDirector = await directorService.getDirector(
      null,
      directorParams.name,
      directorParams.surname
    );

    if (existingDirector) {
      return res.status(200).json(existingDirector);
    }

    const director = await directorService.insertDirector(directorParams);

    res.status(201).json(director);
  } catch (error) {
    res.status(500).json({ error: error?.message || "internal server error" });
  }
});

router.delete("/:id", authentication, logging, async (req, res) => {
  const id = req.params.id;

  try {
    const director = await directorService.getDirector(id);
    if (!director) {
      return res.status(404).json({ error: `id: ${id} is not found` });
    }

    await directorService.deleteDirector(id);

    res.status(200).json({ message: `id: ${id} is deleted!` });
  } catch (error) {
    res.status(404).json({ error: error?.message });
  }
});

router.put("/", authentication, logging, async (req, res) => {
  const director = req.body;

  try {
    const updatedDirector = await directorService.updateDirector(director);

    if (updatedDirector) {
      return res.status(200).json(updatedDirector);
    }
  } catch (error) {
    res.status(404).json({ error: error?.message });
  }
});

module.exports = router;
