/*// const mongoose = require('mongoose') <--- do not need
//object destructured ---> ← ↑ → ↓ ↓ ↓ ↓ ↓
*/
const { Schema, model } = require('mongoose');

const stickerSchema = new Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  protectiveCoating: { type: Boolean, required: true }
});
/*
// make sticker model and connect to database. 'Sticker' singular, and first letter capatalized.
*/
const Sticker = model('Sticker', stickerSchema);

module.exports = Sticker;
