from django.urls import path
from lovezone.apps.index import views


urlpatterns = [
    path('', views.IndexView.as_view())
]