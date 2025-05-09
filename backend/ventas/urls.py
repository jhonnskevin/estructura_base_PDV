# ventas/urls.py
from django.urls import path
from django.http import JsonResponse

def hola_mundo(request):
    return JsonResponse({'mensaje': '¡Hola desde Django!'})

urlpatterns = [
    path('api/hola/', hola_mundo, name='hola_mundo'),
]
