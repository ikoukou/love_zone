from django.urls import path
from lovezone.apps.music import views


urlpatterns = [
    path('', views.MusicView.as_view()),
    path('songList', views.SongListView.as_view()),
    path('play', views.RidView.as_view()),
    path('lrc', views.LrcView.as_view()),
    path('search', views.SearchView.as_view())
]