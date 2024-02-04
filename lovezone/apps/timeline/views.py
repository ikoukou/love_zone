from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import render
from django.views import View
from timeline.models import Timeline


class TimelineView(LoginRequiredMixin, View):
    login_url = "/login/"
    redirect_field_name = "redirect_to"

    def get(self, request):
        result = {
            "timeline_content": Timeline.objects.all().order_by('-id')
        }
        return render(request, 'timeline.html', context=result)
