const express = require('express');
const godzillaRouter = express.Router();
const godzillaList = require('./../lists/godzillaList');

const webTitle = 'Godzilla Database';

const router = (nav) => {
  
  godzillaRouter.route('/')
    .get((req, res) => {
      res.render('godzillasView', {
        nav,
        webTitle,
        godzillaList
      });
    });
  
  godzillaRouter.route('/:id')
    .get((req, res) => {
      const { id } = req.params;
      res.render('godzillaView', {
        godzilla: godzillaList[id],
        nav,
        webTitle
      });
    });
  
  return godzillaRouter;
}


module.exports = router;