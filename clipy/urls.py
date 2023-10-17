from django.urls import path
from . import views

urlpatterns = [
    path('list/',views.get_clips,name='get-clips'),
    path('upload-clip/',views.upload_clip,name='upload-clip'),
]