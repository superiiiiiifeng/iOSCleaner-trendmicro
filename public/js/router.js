var express=require('express');
const { Router } = require('express');
var router=express.Router();

router.get('/',function(req,res) {
    res.render('index.html')
});
router.get('/product',function(req,res) {
    res.render('./partials/product.html')
});
router.get('/blog',function(req,res) {
    res.render('./partials/blog.html')
});
router.get('/blog/detail',function(req,res) {
    res.render('./partials/blog-detail.html')
});
router.get('/support',function(req,res) {
    res.render('./partials/support.html')
});
router.get('/partners',function(req,res) {
    res.render('./partials/partners.html')
});

module.exports=router;





