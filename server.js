const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var request = require('request');
var cheerio = require('cheerio');
var products = [];

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), () => {
  console.log('listening on ' + app.get('port'));
})

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.get('/get/product/:product', (req, res) => {

  request(`https://www.americanas.com.br/busca?conteudo=${req.params.product}/`, function (error, response, body) {
    if (error) {
      console.log("Error: " + error);
    }
    console.log("Status code: " + response.statusCode);

    var $ = cheerio.load(body);

    $('.card-product').each(function (index) {
      var title = $(this).find('.card-product-name').text().trim();
      var price = $(this).find('.value').text().trim();
      var productLink = $(this).find('.card-product-url').attr('href');

      products.push({
        "title": title,
        "price": price,
        "link": "https://www.americanas.com.br" + productLink
      });



    });

    return res.status(200).send(products);

  });

});


