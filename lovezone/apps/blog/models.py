from django.db import models
from django.utils import timezone


class Articles(models.Model):
    user_id = models.ForeignKey('index.Users', on_delete=models.CASCADE)
    type = models.CharField(max_length=10)
    headline = models.CharField(max_length=50)
    content = models.TextField()
    thumbnail = models.ImageField()
    read_count = models.IntegerField(default=0)
    reply_count = models.IntegerField(default=0)
    recommended = models.BooleanField(default=False)
    create_time = models.DateTimeField(default=timezone.now)
    update_time = models.DateTimeField(default=timezone.now)


class Comments(models.Model):
    user_id = models.ForeignKey('index.Users', on_delete=models.CASCADE)
    article_id = models.ForeignKey('Articles', on_delete=models.CASCADE)
    content = models.TextField()
    reply_id = models.ForeignKey('Comments', on_delete=models.CASCADE)
    create_time = models.DateTimeField(default=timezone.now)
    update_time = models.DateTimeField(default=timezone.now)
