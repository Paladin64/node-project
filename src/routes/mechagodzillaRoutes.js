const express = require('express');
const mechagodzillaRouter = express.Router();
const mechagodzillaList = require('./../lists/mechagodzillaList');

const webTitle = 'Godzilla Database';

const router = (nav) => {

  mechagodzillaRouter.route('/')
    .get((req, res) => {
      res.render('mechagodzillasView', {
        nav,
        webTitle,
        mechagodzillaList
      });
    });
  
  mechagodzillaRouter.route('/:id')
    .get((req, res) => {
      const { id } = req.params;
      res.render('mechagodzillaView', {
        mechagodzilla: mechagodzillaList[id],
        nav,
        webTitle
      })
    });
  
  return mechagodzillaRouter;
}

module.exports = router;