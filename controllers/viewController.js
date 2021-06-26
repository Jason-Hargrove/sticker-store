const RESOURCE_PATH = '/stickers'

const viewController = {
  index(req, res, next){
    res.render('Index', { stickers: res.locals.data.stickers })
  },
  show(req, res, next){
    res.render('Show', {sticker: res.locals.data.sticker})
  },
  edit(req, res, next){
    res.render('Edit', { sticker: res.locals.data.sticker })
  },
  redirectHome(req, res, next){
    res.redirect(RESOURCE_PATH)
  },
  redirectShow(req, res, next){
    res.redirect(RESOURCE_PATH + `/${req.params.id}`)
  }
}

module.exports = viewController;
