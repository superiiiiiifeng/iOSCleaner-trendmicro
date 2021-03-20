var express=require('express');
//创建服务器
var app=express();
var path=require('path');
var router=require('./public/js/router.js');


// 采用express的API可以直接公开指定目录提供静态资源
app.use('/public',express.static(path.join(__dirname,'./public/')));
// 直接通过/public/xxx的方式直接访问public目录下的所有静态资源
app.use('/node_modules/',express.static(path.join(__dirname,'./node_modules/')));

app.engine('html',require('express-art-template'));

app.set('views','src/views');

// 挂载路由
//将路由容器加载到app服务器中
app.use(router);

app.listen(3000,function() {
    console.log('app is running...');
});