from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import Task
from .serializers import TaskSerializer


@api_view(['GET'])
def api_overview(request):
    apis = {
        'Tasks List': '/task/list',
        'Add Task': '/task/add',
        'Delete Task': '/task/delete/<str:pk>/',
        'Update Task': '/task/update/<str:pk>/',
    }
    return Response(apis, status=200)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_tasks_list(request):
    user = request.user
    tasks = Task.objects.filter(user=user)
    serializer = TaskSerializer(tasks, many=True)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_task(request):
    user = request.user
    serializer = TaskSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(user=user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_task(request, pk):
    user = request.user
    task = Task.objects.get(user=user, id=pk)
    if task:
        task.delete()
        return Response(status=200)
    else:
        return Response({"detail": "Task not found."}, status=404)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_task(request, pk):
    user = request.user
    task = Task.objects.get(id=pk)
    if task:
        data = request.data
        serializer = TaskSerializer(task, data=data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    return Response({"detail": "Task not found or unauthorized"}, status=status.HTTP_404_NOT_FOUND)
