from django.contrib import admin
from django.urls import path, include
from . import views
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView
from django.urls import re_path

urlpatterns = [
    path("admin/", admin.site.urls),
    path('api/', include('api.urls')),
    path('task/', include('tasksapi.urls')),
    path('file/', include('fileapi.urls')),
    path('clips/', include('clipy.urls')),
    path('game/', include('gameapi.urls')),
    path('', TemplateView.as_view(template_name='index.html')),
    re_path(r'^(?!media/).*$', TemplateView.as_view(template_name='index.html')),
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
