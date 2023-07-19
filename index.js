const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const port = 3009;

// app.use(express.static(`${__dirname}/public`));
app.set('view engine','hbs');
app.set('views', './public/views')

hbs.registerPartials(path.join(__dirname, '/public/views/partials'));
app.use(express.static(path.join(`${__dirname}/public`)));

app.get('/',(req,res) => {
  res.render('index');
});


app.listen(port,() => {
  console.log(`listening on http://localhost:${port}`)
})