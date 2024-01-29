from flask import *
import json
import configparser
import os
import requests

# configuration
DEBUG = True

# instance the app
app = Flask(__name__)
app.config.from_object(__name__)

#进入各个界面的路由及其返回函数
@app.route('/')
def index():
    return render_template('daohang.html')

@app.route('/timeline')
def timeline():
    return render_template('timeline.html')

@app.route('/music')
def music():
    return render_template('music.html')
def kuwoAPI():
    name = request.args.get('name')
    url = 'https://kuwo.cn/'
    # 保存这次访问的cookies
    html = requests.session()
    html.get(url)
    csrf = html.cookies.get_dict()['kw_token']
    print('token:', csrf)

    url = f'https://kuwo.cn/api/www/search/searchMusicBykeyWord?key={name}&pn=1&rn=50&httpsStatus=1'
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:106.0) Gecko/20100101 Firefox/106.0',
        'Accept': 'application/json, text/plain, */*',
        'csrf': csrf,
        'Referer': 'https://kuwo.cn',
    }
    music_list = html.get(url, headers=headers).json()["data"]["list"]

    music_list = json.dumps(music_list).encode('utf8').decode('unicode_escape')
    print(f'本次搜索内容=>\n{name}')
    return music_list

@app.route('/songList')
def songList():
    return render_template('songList.html')


@app.route('/rid/')
def ridKuwoAPI():
    rid = request.args.get('rid')
    url = f'http://www.kuwo.cn/api/v1/www/music/playUrl?mid={rid}&type=convert_url3&br=320kmp3'
    download_url = requests.get(url=url).json()["data"]["url"]
    print(f'已获取到mp3文件链接=>\n{str(download_url)}')
    return str(download_url)


@app.route('/lrc/')
def lrcKuwoAPI():
    rid = request.args.get('rid')
    url = f'https://m.kuwo.cn/newh5/singles/songinfoandlrc?musicId={rid}&httpsStatus=1&reqId=4af22230-c8bd-11ed-af8a-55d47a6ff667'
    lrc = requests.get(url=url).json()["data"]["lrclist"]
    print('已获取到歌词\n\n')
    return json.dumps(lrc)

if __name__ == '__main__':
   app.run(debug = True)

