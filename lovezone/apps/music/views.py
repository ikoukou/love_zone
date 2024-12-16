import json
import re
import requests
from django.contrib.auth.mixins import LoginRequiredMixin
from django.http import HttpResponse
from django.shortcuts import render
from django.views import View


class MusicView(LoginRequiredMixin, View):
    def get(self, request):
        if LoginRequiredMixin():
            return render(request, 'music.html')


class SongListView(View):
    def get(self, request):
        return render(request, 'songList.html')


class RidView(View):
    def get(self, request):
        rid = request.GET['rid']
        url = "http://music.163.com/song/media/outer/url?id={}.mp3".format(rid)
        #res = requests.get(url=url).json()['data'][0]['url']
        #res = json.dumps(res)
        return HttpResponse(url, content_type='application/json', status=200)


class LrcView(View):
    def get(self, request):
        rid = request.GET['rid']
        url = "http://music.163.com/api/song/lyric?" \
              "os=pc&id={}&lv=-1&kv=-1&tv=-1".format(rid)
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


class SearchView(View):
    def get(self, request):
        music_name = request.GET['name']
        limit = request.GET['limit'] if 'limit' in request.GET else '30'
        offset = request.GET['offset'] if 'offset' in request.GET else '0'
        url = "http://music.163.com/api/search/get/web?csrf_token=hlpretag=&hlposttag=" \
              "&s={}&type=1&offset={}&total=true&limit={}".format(music_name, offset, limit)
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
