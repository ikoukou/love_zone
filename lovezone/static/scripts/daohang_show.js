var prevScrollPos = window.pageYOffset; // 记录上次滚动位置
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset; // 获取当前滚动位置
  if (prevScrollPos > currentScrollPos) { // 向上滚动
    document.getElementById("daohang").style.top = "0"; // 显示导航栏
  } else { // 向下滚动
    document.getElementById("daohang").style.top = "-60px"; // 隐藏导航栏（假设导航栏高度为50像素）
  }
  prevScrollPos = currentScrollPos; // 更新上次滚动位置
};