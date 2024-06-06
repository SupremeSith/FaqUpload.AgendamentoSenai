from django.shortcuts import render

# views.py
from django.shortcuts import render, redirect

def homepage(request):
    context = {}
    return render(request, 'homepage.html', context)

def faq(request):
    context = {}
    return render(request, 'faq.html', context)

def perfil(request):
    context = {}
    return render(request, 'perfil.html', context)

# Create your views here.
