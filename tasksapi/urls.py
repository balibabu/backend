from django.urls import path
from . import views

urlpatterns = [
    path('',views.api_overview,name='api-overview'),
    path('list/',views.get_tasks_list,name='task-list'),
    path('add/',views.add_task,name='task-add'),
    path('delete/<str:pk>/',views.delete_task,name='task-delete'),
    path('update/<str:pk>/',views.update_task,name='task-update'),
]