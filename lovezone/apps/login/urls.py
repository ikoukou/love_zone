from django.urls import path
from lovezone.apps.login import views


urlpatterns = [
    path('', views.LoginView.as_view())
]