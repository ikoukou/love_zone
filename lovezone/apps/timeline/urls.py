from django.urls import path
from timeline import views


urlpatterns = [
    path('', views.TimelineView.as_view())
]