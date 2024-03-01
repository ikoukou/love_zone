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