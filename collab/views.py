__author__ = 'kcaulfield'
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.template import RequestContext
from django.shortcuts import render_to_response
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required

def index(request):
    context = RequestContext(request)
    context_dict = {}
    return render_to_response('index.html', context_dict, context)