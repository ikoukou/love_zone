from django.db import models
from django.utils import timezone


class Timeline(models.Model):
    content = models.TextField()
    image = models.ImageField()
