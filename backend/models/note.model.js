const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const noteSchema = new Schema({
    username: { type: String, required: true },
    title: { type: String },
    date: { type: Date, required: true },
}, {
    timestamps: true,
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;