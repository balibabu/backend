from django.urls import path
from . import views

urlpatterns = [
###################### All Files and Folder At Once ######################
    path('files/', views.get_all_files),
    path('folders/', views.get_all_folders),
#####################################################################
    path('files/<str:pk>/', views.get_files),
    path('upload-file/', views.upload_file),
    path('delete-file/<int:pk>/', views.delete_file, name='delete_file'),
    path('create-folder/',views.create_folder,name='create_folder'),
    path('folders/<str:pk>/', views.get_folders, name='get_folders'),
    path('update-folder/<str:pk>/', views.updated_folder_title, name='update-folder-title'),
    path('delete-folder/<int:pk>/', views.delete_folder, name='delete_folder'),
]
