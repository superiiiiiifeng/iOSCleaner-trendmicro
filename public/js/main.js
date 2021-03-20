const header = document.querySelector('header');
const navCenter = document.querySelector('.nav-center');
const navItems = document.querySelectorAll('.nav-center .lia');
const burger = document.querySelector('.burger');
const container = document.querySelector('.container');
const footer = document.querySelector('footer');
const body = document.querySelector('body');
const navProduct = document.querySelector('.nav-product');
const blogItems = document.querySelectorAll('.blog .tag li');
const product = document.querySelector('.product');
const productImg = document.querySelector('.product img');
const promotionDialog = document.querySelector('.promotion-dialog');
const promotionClose = document.querySelector('#promotionClose');
const promotionBg = document.querySelector('.promotion-bg');
const urlItems = ['/','/blog','/support','/partners'];
var openMenu = true;
var openProduct = true;
var pathName = window.location.pathname.substring(0,window.location.pathname.substr(1).indexOf('/')+1 > 0?window.location.pathname.substr(1).indexOf('/')+1:window.location.pathname.length);


//设置cookie
function setCookie(key,value,expires){
  document.cookie=encodeURIComponent(key)+'='+encodeURIComponent(value)+';expires='+ddate(expires);
}
function ddate(expires){
  var ddate=new Date();
  ddate.setDate(ddate.getDate()+expires);
  return ddate
}
//读取cookie
function getCookie(name){
  var arrStr=document.cookie.split('; ');
  for(var i=0;i<arrStr.length;i++){
    var arr=arrStr[i].split('=');
    if(arr[0]===name){return decodeURIComponent(arr[1]) }
  }
  return false;
}
//删除cookie
function removeCookie(name){
  setCookie(name,'',-1)
}

window.addEventListener("load",function(){
  if(window.location.pathname !== '/product') {
    navItems[urlItems.indexOf(pathName)].classList.add('lib');
  }
  if(this.innerWidth > 695) {
    navCenter.style.transition = '0s ease-in-out';
    navProduct.style.maxWidth = '87%';
    navProduct.style.top = '60px';
    navProduct.style.left = '25px';
  } else {
    navCenter.style.transition = '0.1s ease-in-out';
    navProduct.style.maxWidth = '100%';
    navProduct.style.top = '0';
    navProduct.style.left = '0';
  }
  if(window.location.pathname === '/') {
    if(!getCookie('openPromotion')) {
      timer=setInterval(function(){
        promotionDialog.style.display = 'block';
        promotionBg.style.display = 'block';
        clearInterval(timer);
      },1500);
      setCookie('openPromotion','true',1);
    }
  }
});

promotionClose.addEventListener('click',function () {
  promotionDialog.style.display = 'none';
  promotionBg.style.display = 'none';
});

window.addEventListener("resize",function(){
  if(this.innerWidth > 705) {
    navCenter.style.transition = '0s ease-in-out';
    navProduct.style.maxWidth = '87%';
    navProduct.style.top = '60px';
    navProduct.style.left = '25px';
    if(window.location.pathname !== '/product') {
      navItems[urlItems.indexOf(pathName)].classList.add('lib');
    }
  } else {
    navCenter.style.transition = '0.2s ease-in-out';
    navProduct.style.maxWidth = '100%';
    navProduct.style.top = '0';
    navProduct.style.left = '0';
    if(window.location.pathname !== '/product') {
      navItems[urlItems.indexOf(pathName)].classList.remove('lib');
    }
  }
});

burger.addEventListener('click',() => {
  burger.classList.toggle('burger-active');
  if(window.location.pathname !== '/product') {
    navItems[urlItems.indexOf(pathName)].classList.remove('lib');
  }
  if (openMenu) {
    navCenter.style.top = '60px';
    navCenter.style.zIndex = '1';
    navCenter.style.height = '200%';
  } else {
    navCenter.style.top = '-95%';
    navCenter.style.zIndex= '-1';
  }
  openMenu = !openMenu;
  if(!openProduct) {
    navProduct.classList.toggle('productActive');
    openProduct = true;
    productImg.src = '/public/icon/Chevron-down.svg';
  }
});

const colors = ['#C9F59B','#F5EC9B','#F5BB9B','#9BAFF5','#D49BF5','#9BDFF5'];
for (let key of blogItems) {
  key.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
}




