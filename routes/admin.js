var express = require('express');
const productHelpers = require('../helpers/product-helpers');
var router = express.Router();
var productHelper=require('../helpers/product-helpers')

/* GET users listing. */
router.get('/', function (req, res, next) {
  let products = [
    {
      name: 'samsung note 20',
      category: 'mobile',
      price: '69999/-',
      image: 'https://m.media-amazon.com/images/I/4110WP6GBwL._SY300_SX300_QL70_FMwebp_.jpg'
    },
    {
      name: 'samsung note 22',
      category: 'mobile',
      price: '79999/-',
      image: 'https://m.media-amazon.com/images/I/91IBNGEAhyL._SX522_.jpg'
    },
    {
      name: 'samsung note 23',
      category: 'mobile',
      price: '89999/-',
      image: 'https://m.media-amazon.com/images/I/61imYpK33qL._SX522_.jpg'
    },
    {
      name: 'samsung note 24',
      category: 'mobile',
      price: '99999/-',
      image: 'https://m.media-amazon.com/images/I/71J8tz0UeJL._SX522_.jpg'
    },

  ]
  res.render('admin/view-products', { admin: true, products });
});
router.get('/add-product', (req, res) => {
  res.render('admin/add-product')
})
router.post('/add-product', (req, res) => {
  console.log(req.body);
  console.log(req.files.Image)

  productHelpers.addProduct(req.body,(id)=>{
    let image=req.files.Image
    image.mv('./public/product-images/'+id+'.jpg',(err,done)=>{
      if(!err){
        res.render("admin/add-product")
      }
    })
    
  })
})

module.exports = router;
