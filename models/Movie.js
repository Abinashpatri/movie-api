import mongoose from "mongoose"

const MovieSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    rating: {type: Number, required: true},
    cast: {type: Array},
    genre: {type: String},
    date: {type: Date}
}, {timestamps: true})

export default mongoose.model("Movie", MovieSchema)