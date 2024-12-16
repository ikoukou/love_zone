from django.urls import path
from lovezone.apps.blog import views


urlpatterns = [
    path('<str:blog_type>/', views.BlogView.as_view()),
    path('<int:blog_id>/', views.BlogDetailView.as_view())
]