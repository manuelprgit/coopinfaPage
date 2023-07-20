const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs'); 
const port = 3009;
 
app.set('view engine','hbs');
app.set('views', './public/html')

hbs.registerPartials(path.join(__dirname, '/public/html/views/partials'));
app.use(express.static(path.join(`${__dirname}/public`)));

app.get('/',(req,res) => {
  res.render('home');
});

app.listen(port,() => {
  console.log(`listening on http://localhost:${port}`)
})