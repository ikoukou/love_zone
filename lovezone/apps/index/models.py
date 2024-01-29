from django.db import models
from django.utils import timezone
from django.contrib.auth.models import AbstractUser


class Users(AbstractUser):
    nickname = models.CharField(verbose_name='用户昵称', max_length=20)
    avatar = models.ImageField(verbose_name='用户头像')
    role = models.CharField(verbose_name='角色', max_length=20)
    email = models.EmailField(verbose_name='邮箱', default='', unique=True)

