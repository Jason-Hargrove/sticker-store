const Sticker = require('../models/sticker')

const dataController = {
  index(req, res, next){
      Sticker.find({}, (err, foundStickers) => {
        if(err){
          res.status(404).send({
            msg: err.message
          })
        } else {
          res.locals.data.stickers = foundStickers
          next()
        }
      })
  },
  show(req, res, next){
    Sticker.findById(req.params.id, (err, foundSticker) => {
      if(err){
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.sticker = foundSticker;
        next();
      }
    })
  },
  create(req, res, next){
    req.body.protectiveCoating === 'on'
      ? req.body.protectiveCoating = true
      : req.body.protectiveCoating = false
    Sticker.create(req.body, (err, createdSticker) => {
      if(err){
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.sticker = createdSticker;
        next();
      }
    })
  },
  destroy(req, res, next){
    Sticker.findByIdAndDelete(req.params.id, (err, deletedSticker) => {
      if(err){
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.sticker = deletedSticker;
        next();
      }
    })
  },
  update(req, res, next){
    req.body.protectiveCoating === 'on'
      ? req.body.protectiveCoating = true
      : req.body.protectiveCoating = false
    Sticker.findByIdAndUpdate(req.params.id, req.body, { new: true}, (err, updatedSticker) => {
      if(err){
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.sticker = updatedSticker;
        next();
      }
    })
  }
}

module.exports = dataController;
