from django.core.paginator import Paginator
from django.shortcuts import render
from django.views import View
from lovezone.utils.query_sql import query_all_dict
from blog.models import Articles, Comments


class BlogView(View):
    def get(self, request, *args, **kwargs):
        blog_type = self.kwargs['blog_type']
        articles = Articles.objects.all()
        types = [i.type for i in list(articles)]
        res = {
            "articles": articles.filter(type=blog_type),
            "article_count": len(articles),
            "type_count": len(set(types))
        }
        print(res)
        return render(request, 'articles.html', context=res)


class BlogDetailView(View):
    def get(self, request, *args, **kwargs):
        blog_id = self.kwargs['blog_id']
        article = Articles.objects.all().filter(id=blog_id)
        comments = Comments.objects.all().filter(article_id=blog_id)
        res = {
            'article': article,
            'comments': comments
        }
        return render(request, 'article_detail.html', context=res)
