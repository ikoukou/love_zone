# Generated by Django 4.2.7 on 2023-12-05 09:40

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Users',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('nickname', models.CharField(max_length=20)),
                ('password', models.CharField(default='', max_length=20)),
                ('avatar', models.ImageField(upload_to='')),
                ('role', models.CharField(max_length=20)),
                ('create_time', models.DateTimeField(default=django.utils.timezone.now)),
                ('update_time', models.DateTimeField(default=django.utils.timezone.now)),
            ],
        ),
    ]