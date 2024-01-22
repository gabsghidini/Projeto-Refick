from django.urls import path
from base.views import pagina_inicial

urlpatterns = [
    path('', pagina_inicial)
]
