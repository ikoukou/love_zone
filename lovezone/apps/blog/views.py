import datetime

from django.core.paginator import Paginator
from django.shortcuts import render
from django.views import View
from lovezone.utils.query_sql import query_all_dict
from blog.models import Articles, Comments


class BlogView(View):
    def get(self, request, *args, **kwargs):
        blog_type = self.kwargs['blog_type']
        type_dic = {
            "study": "我的书房",
            "her": "你的书房",
            "life": "生活记录",
            "love": "悄悄话"
        }
        articles = Articles.objects.all().filter(type=blog_type)
        types = [i.type for i in list(articles)]
        articles_list = []
        for i in articles:
            article = {
                "type": i.type,
                "headline": i.headline,
                "content": i.content,
                "thumbnail": i.thumbnail,
                "read_count": i.read_count,
                "reply_count": i.reply_count,
                "recommended": i.recommended,
                "tags": [j for j in i.tags.split(',')],
                "update_time": i.update_time.strftime("%Y-%m-%d %H:%M:%S"),
                "creator": i.user_id.username,
            }
            articles_list.append(article)
        res = {
            "type": type_dic[blog_type],
            "articles": articles_list,
            "article_count": len(articles),
            "type_count": len(set(types))
        }
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
