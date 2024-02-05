from django.core.paginator import Paginator
from django.shortcuts import render
from django.views import View
from lovezone.utils.query_sql import query_all_dict


class BlogView(View):
    def get(self, request):
        return render(request, 'articles.html')


class BlogDetailView(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'article_detail.html')
