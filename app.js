const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

const nav = [
  { link: '/godzillas', title: 'Godzilla' },
  { link: '/mothras', title: 'Mothra' },
  { link: '/gigans', title: 'Gigan' },
  { link: '/ghidorahs', title: 'Ghidorah' },
  { link: '/rodans', title: 'Rodan' },
  { link: '/mechagodzillas', title: 'Mechagodzilla' },
  { link: '/titanosauruses', title: 'Titanosaurus' },
  { link: '/anguiruses', title: 'Anguirus' },
  { link: '/mutos', title: 'MUTOs' }
];

const godzillaRouter = require('./src/routes/godzillaRoutes')(nav);
const mechagodzillaRouter = require('./src/routes/mechagodzillaRoutes')(nav);

const webTitle = 'Godzilla Database';

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/godzillas', godzillaRouter);
app.use('/mechagodzillas', mechagodzillaRouter);
app.get('/', (req, res) => {
  res.render('index', {
    nav,
    webTitle
  });
});

app.listen(3000, () => {
  debug(`listening on port ${chalk.green(port)}`);
});