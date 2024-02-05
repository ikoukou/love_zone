from django.db import models
from django.utils import timezone


class Articles(models.Model):
    user_id = models.ForeignKey('index.Users', on_delete=models.CASCADE)
    type = models.CharField(max_length=10, db_comment="文章类型")
    headline = models.CharField(max_length=50, db_comment="文章标题")
    content = models.TextField(db_comment="文章内容")
    thumbnail = models.ImageField(db_comment="缩略图")
    read_count = models.IntegerField(default=0, db_comment="阅读次数")
    reply_count = models.IntegerField(default=0, db_comment="评论数")
    recommended = models.BooleanField(default=False, db_comment="是否收藏")
    tags = models.CharField(max_length=50, null=True, db_comment="标签")
    create_time = models.DateTimeField(default=timezone.now)
    update_time = models.DateTimeField(default=timezone.now)


class Comments(models.Model):
    user_id = models.ForeignKey('index.Users', on_delete=models.CASCADE)
    article_id = models.ForeignKey('Articles', on_delete=models.CASCADE)
    content = models.TextField()
    reply_id = models.ForeignKey('Comments', on_delete=models.CASCADE)
    create_time = models.DateTimeField(default=timezone.now)
    update_time = models.DateTimeField(default=timezone.now)
