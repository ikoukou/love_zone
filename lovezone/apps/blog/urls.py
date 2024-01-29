from django.urls import path
from blog import views


urlpatterns = [
    path('', views.BlogView.as_view())
]