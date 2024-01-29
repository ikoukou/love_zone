from django.core.exceptions import PermissionDenied
from django.core.paginator import Paginator
from django.shortcuts import render, redirect
from django.views import View
from django.contrib.auth import authenticate, login


class LoginView(View):
    def get(self, request):
        return render(request, 'login.html')

    def post(self, request):
        user = authenticate(username=request.POST['username'], password=request.POST['password'])
        if user is None:
            raise PermissionDenied
        else:
            login(request, user)
            request.session.set_expiry(60*60*24)
            return redirect('/')
