import express from "express";
const router = express.Router()
import Movie from "../models/Movie.js";

// Create Movie
router.post("/", async (req, res) => {
    try {
        const newMovie = new Movie({
            name: req.body.name,
            rating: req.body.rating,
            cast: req.body.cast,
            genre: req.body.genre,
            date: req.body.date
        })

        const movie = await newMovie.save()
        res.status(200).json(movie)
    } catch (error) {
        res.status(500).json(error)
    }
})

// Update Movie
router.put("/:id", async (req, res) => {
    try {
        const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        res.status(200).json(updatedMovie)
    } catch (error) {
        res.status(500).json(error);
    }
})
// Delete Movie
router.delete("/:id", async (req, res) => {
    try {
        const deleteMovie = await Movie.findByIdAndDelete(req.params.id)
        res.status(200).json(deleteMovie)
    } catch (error) {
        res.status(500).json(error);
    }
})

//GET Movie
router.get("/:id", async (req, res) => {
    try {
      const movie = await Movie.findById(req.params.id);
      res.status(200).json(movie);
    } catch (error) {
      res.status(500).json(error);
    }
  });

//GET All Movies
router.get("/", async (req, res) => {
    try {
      const movie = await Movie.find();
      res.status(200).json(movie);
    } catch (error) {
      res.status(500).json(error);
    }
  });



export default router

