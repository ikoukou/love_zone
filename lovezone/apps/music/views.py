import json
import re
import requests
from django.contrib.auth.mixins import LoginRequiredMixin
from django.http import HttpResponse
from django.shortcuts import render
from django.views import View


class MusicView(LoginRequiredMixin, View):
    login_url = "/login/"
    redirect_field_name = "redirect_to"

    def get(self, request):
        if LoginRequiredMixin():
            return render(request, 'music.html')


class SongListView(View):
    def get(self, request):
        return render(request, 'songList.html')


class RidView(View):
    def get(self, request):
        rid = request.GET['rid']
        url = "http://music.cyrilstudio.top/song/url?id=" + str(rid)
        res = requests.get(url=url).json()['data'][0]['url']
        res = json.dumps(res)
        return HttpResponse(res, content_type='application/json', status=200)
    # def get(self, request):
    #     rid = request.args.get('rid')
    #     url = f'http://www.kuwo.cn/api/v1/www/music/playUrl?mid={rid}&type=convert_url3&br=320kmp3'
    #     download_url = requests.get(url=url).json()["data"]["url"]
    #     print(f'已获取到mp3文件链接=>\n{str(download_url)}')
    #     return str(download_url)


class LrcView(View):
    def get(self, request):
        rid = request.GET['rid']
        url = "http://music.cyrilstudio.top/lyric?id=" + str(rid)
        res = requests.get(url=url).json()['lrc']['lyric']
        li = []
        for i in res.split('\n')[:-1]:
            lrc = {}
            pa = r'^\[(\d+):(\d+).(\d+)\](.*)$'
            m = re.match(pa, i)
            lrc['time'] = int(m.group(1)) * 60 + int(m.group(2))
            lrc['lineLyric'] = m.group(4)
            li.append(lrc)
        li = json.dumps(li)
        return HttpResponse(li, content_type='application/json', status=200)
    # def get(self, request):
    #     rid = request.args.get('rid')
    #     url = f'https://m.kuwo.cn/newh5/singles/songinfoandlrc?musicId={rid}&httpsStatus=1&reqId=4af22230-c8bd-11ed-af8a-55d47a6ff667'
    #     lrc = requests.get(url=url).json()["data"]["lrclist"]
    #     print('已获取到歌词\n\n')
    #     return json.dumps(lrc)


class SearchView(View):
    def get(self, request):
        music_name = request.GET['name']
        limit = request.GET['limit'] if 'limit' in request.GET else '30'
        offset = request.GET['offset'] if 'offset' in request.GET else '0'
        url = "http://music.cyrilstudio.top/search?keywords=" + music_name + '&limit=' + limit + '&offset=' + offset
        res = requests.get(url=url).json()['result']['songs']
        songList = []
        for i in res:
            song = {
                'rid': i['id'],
                'name': i['name'],
                'artist': i['artists'][0]['name'],
                'pic': i['artists'][0]['img1v1Url']
            }
            songList.append(song)
        res = json.dumps(songList)
        return HttpResponse(res, content_type='application/json', status=200)
