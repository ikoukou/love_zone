/*主题 颜色*/
var theme_lrcColor = localStorage.getItem('themeLrcColor');

const player = new Plyr('audio');
// 获取Plyr音频播放器控制按钮节点
const controls = document.querySelector('.plyr__controls');
if (!isMobile()) {
  document.getElementsByClassName('plyr__controls__item plyr__volume')[0].style.display = 'flex';
  let btns = document.querySelectorAll('.btn_box,#listBtn,#resultBtn,#boxBtn,#setBtn');
  btns.forEach(function (btn) {
    btn.style.cursor = 'pointer';
  });
}
// 创建下载按钮
const download = document.createElement("button");
download.classList.add("button_download");
download.style.width = "20px";
download.style.height = "20px";
download.style.border = "0px";
download.style.margin = "0px 5px 0px 5px";
download.innerHTML = '<svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 480 560"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M2 334.5c-3.8 8.8-2 19 4.6 26l136 144c4.5 4.8 10.8 7.5 17.4 7.5s12.9-2.7 17.4-7.5l136-144c6.6-7 8.4-17.2 4.6-26s-12.5-14.5-22-14.5l-72 0 0-288c0-17.7-14.3-32-32-32L128 0C110.3 0 96 14.3 96 32l0 288-72 0c-9.6 0-18.2 5.7-22 14.5z"/></svg>';
download.style.backgroundColor = "rgba(0,0,0,0)";  // 设置背景颜色
download.style.borderRadius = "3px";
download.style.fill = "rgba(74, 84, 100, 0.9)";
download.addEventListener('touchstart', function () {
  download.style.backgroundColor = 'rgba(0, 179, 255, 0.6)';
})
download.addEventListener('mousedown', function () {
  download.style.backgroundColor = 'rgba(0, 179, 255, 0.6)';
})
download.addEventListener('mouseup', function () {
  download.style.backgroundColor = 'rgba(0,0,0,0)';
});
download.onclick = function () {
  // 下载点击
  dialogDisplay('点击右边三个点下载<br><p><br><audio controls="controls"><source id="tempAudio" src="' + mp3Url + '"></audio>');
}

// 创建播放模式按钮
const playbackMode = document.createElement("button");
var modeFlag = localStorage.getItem('modeFlag');
if (modeFlag == null) { modeFlag = 0; }
var orderSvg = '<svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>';
var loopSvg = '<svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M109.7 160H160c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V64C0 46.3 14.3 32 32 32s32 14.3 32 32v51.2L81.6 97.6c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3s-163.8-62.5-226.3 0L109.7 160z"/></svg>';
playbackMode.classList.add("button_playback");
playbackMode.style.width = "20px";
playbackMode.style.height = "20px";
playbackMode.style.border = "0px";
playbackMode.style.margin = "0px 5px 0px 5px";
playbackMode.style.backgroundColor = "rgba(0,0,0,0)";  // 设置背景颜色
playbackMode.style.borderRadius = "3px";
playbackMode.style.fill = "rgba(74, 84, 100, 0.9)";
playbackMode.addEventListener('touchstart', function () {
  playbackMode.style.backgroundColor = 'rgba(0, 179, 255, 0.6)';
})
playbackMode.addEventListener('mousedown', function () {
  playbackMode.style.backgroundColor = 'rgba(0, 179, 255, 0.6)';
})
playbackMode.addEventListener('mouseup', function () {
  playbackMode.style.backgroundColor = 'rgba(0,0,0,0)';
});
if (modeFlag == 0) {
  playbackMode.innerHTML = orderSvg;
}
else {
  playbackMode.innerHTML = loopSvg;
}
playbackMode.onclick = function () {
  //播放模式点击
  if (modeFlag == 0) {
    playbackMode.innerHTML = loopSvg;
    localStorage.setItem('modeFlag', 1);
    modeFlag = localStorage.getItem('modeFlag');
  }
  else {
    playbackMode.innerHTML = orderSvg;
    localStorage.setItem('modeFlag', 0);
    modeFlag = localStorage.getItem('modeFlag');
  }
}

// 创建上一首按钮
const previous = document.createElement("button");
previous.classList.add("button_previous");
previous.style.width = "20px";
previous.style.height = "20px";
previous.style.border = "0px";
previous.style.margin = "0px 5px 0px 5px";
previous.innerHTML = '<svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M493.6 445c-11.2 5.3-24.5 3.6-34.1-4.4L288 297.7V416c0 12.4-7.2 23.7-18.4 29s-24.5 3.6-34.1-4.4L64 297.7V416c0 17.7-14.3 32-32 32s-32-14.3-32-32V96C0 78.3 14.3 64 32 64s32 14.3 32 32V214.3L235.5 71.4c9.5-7.9 22.8-9.7 34.1-4.4S288 83.6 288 96V214.3L459.5 71.4c9.5-7.9 22.8-9.7 34.1-4.4S512 83.6 512 96V416c0 12.4-7.2 23.7-18.4 29z"/></svg>';
previous.style.backgroundColor = "rgba(0,0,0,0)";  // 设置背景颜色
previous.style.borderRadius = "3px";
previous.style.fill = "rgba(74, 84, 100, 0.9)";
previous.addEventListener('touchstart', function () {
  previous.style.backgroundColor = 'rgba(0, 179, 255, 0.6)';
})
previous.addEventListener('mousedown', function () {
  previous.style.backgroundColor = 'rgba(0, 179, 255, 0.6)';
})
previous.addEventListener('mouseup', function () {
  previous.style.backgroundColor = 'rgba(0,0,0,0)';
});
previous.onclick = function () {
  //上一首点击
  //alert('上一首');
  //dialogDisplay('上一首');
  document.getElementById('iframe').contentWindow.nextPlay(0);
}


// 创建下一首按钮
const next = document.createElement("button");
next.classList.add("button_next");
next.style.width = "20px";
next.style.height = "20px";
next.style.border = "0px";
next.style.margin = "0px 5px 0px 5px";
next.innerHTML = '<svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M18.4 445c11.2 5.3 24.5 3.6 34.1-4.4L224 297.7V416c0 12.4 7.2 23.7 18.4 29s24.5 3.6 34.1-4.4L448 297.7V416c0 17.7 14.3 32 32 32s32-14.3 32-32V96c0-17.7-14.3-32-32-32s-32 14.3-32 32V214.3L276.5 71.4c-9.5-7.9-22.8-9.7-34.1-4.4S224 83.6 224 96V214.3L52.5 71.4c-9.5-7.9-22.8-9.7-34.1-4.4S0 83.6 0 96V416c0 12.4 7.2 23.7 18.4 29z"/></svg>';
next.style.backgroundColor = "rgba(0,0,0,0)";  // 设置背景颜色
next.style.borderRadius = "3px";
next.style.fill = "rgba(74, 84, 100, 0.9)";
next.addEventListener('touchstart', function () {
  next.style.backgroundColor = 'rgba(0, 179, 255, 0.6)';
})
next.addEventListener('mousedown', function () {
  next.style.backgroundColor = 'rgba(0, 179, 255, 0.6)';
})
next.addEventListener('mouseup', function () {
  next.style.backgroundColor = 'rgba(0,0,0,0)';
});
next.onclick = function () {
  //下一首点击
  document.getElementById('iframe').contentWindow.nextPlay(1);
}

//将新增按钮放置到html
controls.appendChild(download);
controls.appendChild(previous);
controls.appendChild(playbackMode);
controls.appendChild(next);

//选择显示列表/内容
//按钮高亮与取消高亮
class Highlight {
  yes(obj) {
    // theme_btnColor = localStorage.getItem('themeBtnColor');
    obj.style.backgroundColor = "rgb(255, 220, 232)";
    obj.style.fontSize = "14px";
    obj.style.color = "rgb(0, 0, 0)";
  }
  no(obj) {
    obj.style.backgroundColor = "rgba(250, 250, 250, 0)";
    obj.style.fontSize = "12px";
    obj.style.color = "rgb(95, 95, 95)";
  }
}
const HL = new Highlight();
function listBtn_onclick() {
  //高亮当前按钮
  HL.yes(listBtn);
  HL.no(resultBtn);
  document.getElementById('iframe').contentWindow.displayChange('play');
}
function resultBtn_onclick() {
  HL.yes(resultBtn);
  HL.no(listBtn);
  document.getElementById('iframe').contentWindow.displayChange('search');
}

//弹窗
function dialogDisplay(content) {
  dialog.innerHTML = content + '<div><button id="closeBtn">关闭</button></div>';
  dialog.showModal();
  var closeBtn = document.getElementById('closeBtn');
  closeBtn.style.height = "30px";
  closeBtn.style.width = "50%";
  closeBtn.style.outline = "0";
  closeBtn.style.borderRadius = "20px";
  closeBtn.style.backgroundColor = "rgba(255,180,180,0.5)";
  closeBtn.style.border = "0px";
  closeBtn.addEventListener('touchstart', function () {
    closeBtn.style.backgroundColor = 'rgba(0, 179, 255, 0.6)';
  })
  closeBtn.addEventListener('mousedown', function () {
    closeBtn.style.backgroundColor = 'rgba(0, 179, 255, 0.6)';
  })
  closeBtn.addEventListener('mouseup', function () {
    closeBtn.style.backgroundColor = 'rgba(0,0,0,0)';
  });
  closeBtn.onclick = function () {
    dialog.close();
  }
}

//无按钮弹窗
function dialog_none_btn(action, content = "") {
  if (action == 'open') {
    dialog.innerHTML = content;
    dialog.showModal();
  }
  else {
    dialog.close();
  }
}

// 播放器
controls.style.backgroundColor = 'rgba(181, 232, 255, 0)'; // 背景颜色
controls.style.borderRadius = "0px"
controls.style.height = "30px";
controls.style.width = "100%";
// 检查是否为移动设备
function isMobile() {
  return typeof window.orientation !== "undefined" || navigator.userAgent.indexOf('Mobile') !== -1;
}


//全局变量定义
var lrc = [{ "lineLyric": "歌词加载中……", "time": "2" }, { "lineLyric": "", "time": "4" }];
var lrc_count = 0;
var mp3Url = "";
var music_box = document.getElementById('music_box');
var lrc1 = document.getElementById('lrc1');
var lrc2 = document.getElementById('lrc2');
var lrc3 = document.getElementById('lrc3');
var lrc4 = document.getElementById('lrc4');
var cover = document.getElementById('cover');
var songName = document.getElementById('songName');
var singerName = document.getElementById('singerName');
var dialog = document.getElementById('dialog');
var SearchContent = document.getElementById('search_box');
var listBtn = document.getElementById('listBtn');
var resultBtn = document.getElementById('resultBtn');
var audioPlayer = document.getElementById('music');
var sug = document.getElementById('sug');


//音频播放监听与更新歌词
lrc2.style.color = theme_lrcColor;
lrc2.style.fontWeight = "bolder";
player.on('timeupdate', event => {
  if (lrc_count - 10 > 0) {
    var time_front_10 = Math.floor(parseFloat(lrc[lrc_count - 10]["time"])); // 向下取整，得到整数格式
  }
  if (lrc_count - 5 > 0) {
    var time_front_5 = Math.floor(parseFloat(lrc[lrc_count - 5]["time"])); // 向下取整，得到整数格式
  }
  var time_front = Math.floor(parseFloat(lrc[lrc_count]["time"])); // 向下取整，得到整数格式
  if (lrc_count + 1 < lrc.length) {
    var time_after = Math.floor(parseFloat(lrc[lrc_count + 1]["time"])); // 向下取整，得到整数格式
  }
  if (lrc_count + 5 < lrc.length) {
    var time_after_5 = Math.floor(parseFloat(lrc[lrc_count + 5]["time"])); // 向下取整，得到整数格式
  }
  if (lrc_count + 10 < lrc.length) {
    var time_after_10 = Math.floor(parseFloat(lrc[lrc_count + 10]["time"])); // 向下取整，得到整数格式
  }
  var plyr_time = event.detail.plyr.currentTime;  // 当前时间（单位：秒）
  var plyr_duration = event.detail.plyr.duration;  // 音频总时长（单位：秒）
  if (plyr_time > 3 && plyr_time == plyr_duration) {
    if (modeFlag == 1) {
      event.detail.plyr.currentTime = 0;
      event.detail.plyr.play();
      lrc_count = 0;
    }
    else {
      console.log('已自动下一首');
      document.getElementById('iframe').contentWindow.nextPlay(1);
    }
  }
  lrc2.innerHTML = lrc[lrc_count]["lineLyric"].slice(0, 50);
  if (lrc_count + 2 < lrc.length) {
    if (lrc_count - 1 > 0) {
      lrc1.innerHTML = lrc[lrc_count - 1]["lineLyric"].slice(0, 50);
    }
    lrc3.innerHTML = lrc[lrc_count + 1]["lineLyric"].slice(0, 50);
    lrc4.innerHTML = lrc[lrc_count + 2]["lineLyric"].slice(0, 50);

    if ((lrc1.innerHTML.length > 15 || lrc2.innerHTML.length > 15) && isMobile()) {
      lrc1.style.fontSize = "12px";
      lrc2.style.fontSize = "15px";
      lrc3.style.fontSize = "12px";
      lrc4.style.fontSize = "12px";
    }
    else {
      lrc1.style.fontSize = "15px";
      lrc2.style.fontSize = "18px";
      lrc3.style.fontSize = "15px";
      lrc4.style.fontSize = "15px";
    }
  }
  if (lrc_count + 2 == lrc.length) {
    console.log('ending1');
    lrc1.innerHTML = lrc[lrc_count - 1]["lineLyric"].slice(0, 50);
    lrc3.innerHTML = lrc[lrc_count + 1]["lineLyric"].slice(0, 50);
    lrc4.innerHTML = '--end--';
  }
  if (lrc_count + 1 == lrc.length) {
    console.log('ending2');
    lrc1.innerHTML = lrc[lrc_count - 1]["lineLyric"].slice(0, 50);
    lrc3.innerHTML = '--end--';
    lrc4.innerHTML = '-------';
  }
  if (plyr_time > time_after && lrc_count < lrc.length) lrc_count++;
  if (plyr_time < time_front && lrc_count > 0) lrc_count--;
  if (plyr_time > time_after_5 && lrc_count + 5 < lrc.length) lrc_count += 5;
  if (plyr_time < time_front_5 && lrc_count - 5 > 0) lrc_count -= 5;
  if (plyr_time > time_after_10 && lrc_count + 10 < lrc.length) lrc_count += 10;
  if (plyr_time < time_front_10 && lrc_count - 10 > 0) lrc_count -= 10;
});

//物理按键监听
document.addEventListener('keydown', function (event) { // 监听键盘按下事件
  if (event.key === 'Enter') { // 如果按下的是回车键
    search_onclick();
  }
})


function getMusic(rid) {
  //获取歌词
  var xhrLrc = new XMLHttpRequest();
  xhrLrc.open('get', '/music/lrc?rid=' + rid);
  xhrLrc.send();
  xhrLrc.onreadystatechange = function () {
    if (xhrLrc.readyState == 4 && xhrLrc.status == 200) {
      lrc = JSON.parse(xhrLrc.responseText);
      if (lrc == null) {
        lrc = [{ "lineLyric": "纯音乐 请欣赏", "time": "999" }]
      }
    }
    else if (xhrLrc.status == 433) {
      lrc = [{ "lineLyric": "", "time": "5" }, { "lineLyric": "歌词获取出错，请稍后重试", "time": "999" }]
    }
  }

  //获取歌曲链接
  var xhrSong = new XMLHttpRequest();
  xhrSong.open('get', '/music/play?rid=' + rid);
  xhrSong.send();
  xhrSong.onreadystatechange = function () {
    if (xhrSong.readyState == 4 && xhrSong.status == 200) {
      mp3Url = xhrSong.responseText;
      playerPlay(mp3Url);
    }
  }
}


//播放音乐
function playerPlay(url) {
  url = url.replace(/"/g, '');
  audioPlayer.src = url;
  audioPlayer.play();
}

//切换歌曲
function switchSongs(parameter) {
  lrc_count = 0;
  audioPlayer.pause();
  lrc = [{ "lineLyric": "歌词加载中……", "time": "2" }, { "lineLyric": "", "time": "4" }];
  cover.src = parameter["pic"];
  var name = parameter['name'];
  var singer = parameter['artist'];
  songName.innerHTML = name.slice(0, 15 + (name.length - name.replace(/&[a-z]+;/g, " ").length));
  singerName.innerHTML = singer.slice(0, 15 + (singer.length - singer.replace(/&[a-z]+;/g, " ").length));
//  document.title = '音乐盒(' + name.slice(0, 10 + (name.length - name.replace(/&[a-z]+;/g, " ").length)) + ')';
  getMusic(parameter["rid"]);
}

function search_onclick() {
  if (SearchContent.value == "") {
    dialogDisplay('请输入歌曲/歌手~');
  }
  else {
    document.getElementById('iframe').contentWindow.getSearchResult(SearchContent.value);
    dialog_none_btn(action = 'open', content = '正在搜索……');
  }
}

//等待iframe加载完成
function onIFrameLoaded(iframe, callback) {
  function iframeLoaded() {
    // 取消事件监听器，避免重复执行
    iframe.removeEventListener('load', iframeLoaded);
    // 执行回调函数
    callback();
  }
  if (iframe.attachEvent) {
    // IE浏览器
    iframe.attachEvent('onload', iframeLoaded);
  } else {
    // 其他浏览器
    iframe.addEventListener('load', iframeLoaded);
  }
}
// 使用实例
var myIframe = document.getElementById('iframe');
onIFrameLoaded(myIframe, function () {
  console.log('iframe已加载完成');
  listBtn_onclick();
});

function inputBlur() {
  SearchContent.blur();
}

const iframe = document.getElementById('iframe');
const ilist = document.getElementsByClassName('songList')
var observer = new MutationObserver(function(mutations) {
  // 获取 iframe 内容的实际高度
  var iframeHeight = iframe.contentWindow.document.body.scrollHeight + 'px';
  var iHeight = '200px';
  // 设置 iframe 和 songList 的高度
  iframe.style.height = iHeight;
  ilist[0].style.height = iHeight;
});
// 监听 iframe 内容的变化
observer.observe(iframe.contentWindow.document, { childList: true, subtree: true });
//查看当前浏览器存储变量的键值对
// for (let i = 0; i < localStorage.length; i++) {
//   let key = localStorage.key(i);
//   let value = localStorage.getItem(key);
//   console.log(`${key}: ${value}`);
// }
