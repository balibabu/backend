from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.
@api_view(['GET'])
def api_overview(request):
    apis={
        'Create Token':'api/token',
        'Refresh Token':'api/token/refresh',
        'Register User':'api/register',
        'Login':'api/token',
        'Tasks List':'/task/list',
        'Add Task':'/task/add',
    }
    return Response(apis,status=200)