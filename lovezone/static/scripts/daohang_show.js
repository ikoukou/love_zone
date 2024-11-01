var prevScrollPos = window.scrollY; // 记录上次滚动位置
window.onscroll = function() {
  var currentScrollPos = window.scrollY; // 获取当前滚动位置
  if (prevScrollPos > currentScrollPos) { // 向上滚动
    document.getElementById("daohang").style.top = "0"; // 显示导航栏
  } else { // 向下滚动
    document.getElementById("daohang").style.top = "-60px"; // 隐藏导航栏（假设导航栏高度为50像素）
  }
  prevScrollPos = currentScrollPos; // 更新上次滚动位置
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600){
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn") .style.display = "none";
  }
};

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

// var nav_li_ul = document.querySelector('.nav-li-ul');
// var menu_ul = document.querySelector('.menu-ul');
// const l = nav_li_ul.offsetLeft;
// menu_ul.style.left = l + 'px';
// const h = nav_li_ul.offsetHeight;
// menu_ul.style.top = h + 'px';
// menu_ul.addEventListener('mouseover', () => {
//   menu_ul.style.display = 'block';
// })
// menu_ul.addEventListener('mouseout', () => {
//   menu_ul.style.display = 'none';
// })
// nav_li_ul.addEventListener('mouseover', () => {
//   menu_ul.style.display = 'block';
// })
// nav_li_ul.addEventListener('mouseout', () => {
//   menu_ul.style.display = 'none';
// })