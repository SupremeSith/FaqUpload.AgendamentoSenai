from django.urls import path
from . import views

urlpatterns = [
    path('', views.homepage, name="homepage"),
    path('faq', views.faq, name="faq"),
    path('perfil', views.perfil, name="perfil"),
]