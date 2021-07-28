var show = document.getElementsByClassName('show');
var goodsimg = document.getElementsByClassName('goods-img');
var xmline = document.getElementsByClassName('xmline');
/* 小米手机 */
var xmArr = ['./img/1.webp', './img/2.webp', './img/3.webp', './img/4.webp', './img/5.png', './img/6.png'];
/* 红米手机 */
var hmArr = ['./img/6.webp', './img/5.webp', './img/4.webp', './img/3.webp', './img/2.webp', './img/1.webp'];
/* 电视 */
var tvArr = ['./img/tv1.webp', './img/tv2.webp', './img/tv3.webp', './img/tv4.webp', './img/tv5.webp', './img/tv6.webp'];
/* 笔记本 */
var nbArr = ['./img/nb1.webp', './img/nb2.webp', './img/nb3.webp', './img/nb4.png', './img/nb5.webp', './img/nb6.webp',]
/* 家电 */
var jdArr = ['./img/jd1.webp', './img/jd2.png', './img/jd3.jpg', './img/jd4.png', './img/jd5.webp', './img/jd6.webp',]

move(0, xmArr);
move(1, hmArr);
move(2, tvArr);
move(3, nbArr);
move(4, jdArr);


function move(objNum, objArr) {
    show[objNum].onmouseover = function () {
        for (var i = 0; i < objArr.length; i++) {
            goodsimg[i].src = objArr[i];
        }
    }
}


/* 获取上一张按钮 */
var prev = document.querySelector('#prev');
/* 获取下一张按钮 */
var next = document.querySelector('#next');
/* 获取所有图片li */
var imgli = document.querySelectorAll('.img-li');
/* 获取五个点 */
var swiper = document.querySelectorAll('.swiper');
/* 声明一个 index = 0,后期用于知道是那张图片 */
var index = 0;

var timer;
/* 定义定时器 */
function auto() {
    timer = setInterval(autoplay, 3500);
}
/* 函数，等被调用 */
var autoplay = function () {
    /* 函数被调用一次，index就自加一次 */
    index++;
    /* 判断index如果大于图片的长度indx就等于0 */
    index > imgli.length - 1 ? index = 0 : null;
    console.log(index);
    /* for循环 */
    for (var i = 0; i < imgli.length; i++) {
        /* 先为所有的图片层级透明度都为0 */
        imgli[i].style.zIndex = 0;
        imgli[i].style.opacity = 0;
    }
    /* 利用index知道是那张照片，设置样式 */
    imgli[index].style.zIndex = '100';
    imgli[index].style.opacity = 1;


    for (var i = 0; i < swiper.length; i++) {
        swiper[i].style.backgroundColor = 'rgba(0, 0, 0, .4)';
        swiper[i].style.borderColor = 'hsla(0, 0%, 100%, .3)';

    }
    swiper[index].style.backgroundColor = 'hsla(0, 0%, 100%, .4)';
    swiper[index].style.borderColor = ' rgba(0, 0, 0, .4)';

}

/* 开启定时器 */
auto();

prev.onclick = function () {
    /* 结束定时器 */
    clearInterval(timer);
    index--;
    index < 0 ? index = 4 : null;
    console.log(index);
    for (var i = 0; i < imgli.length; i++) {
        imgli[i].style.zIndex = 0;
        imgli[i].style.opacity = 0;
    }
    imgli[index].style.zIndex = '100';
    imgli[index].style.opacity = 1;
    /* 开启定时器 */
    auto();
}

next.onclick = function () {
    /* 结束定时器 */
    clearInterval(timer);
    index++;
    index > imgli.length - 1 ? index = 0 : null;
    console.log(index);
    for (var i = 0; i < imgli.length; i++) {
        imgli[i].style.zIndex = 0;
        imgli[i].style.opacity = 0;
    }
    imgli[index].style.zIndex = '100';
    imgli[index].style.opacity = 1;
    /* 开启定时器 */
    auto();
}

