from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from .serializers import GameSerializer
from .models import Game

# Create your views here.
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def log_game_stats(request):
    user=request.user
    serializer=GameSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(user=user)
        return Response(serializer.data,status=201)
    return Response(serializer.errors,status=400)

@api_view(['Get'])
@permission_classes([IsAuthenticated])
def get_old_stats(request,title):
    user=request.user
    games=Game.objects.filter(user=user,gameTitle=str(title)).order_by('-startedAt')
    serializer=GameSerializer(games,many=True)
    return Response(serializer.data)


# sudokuData=GameData()
# @api_view(['GET'])
# @permission_classes([IsAuthenticated])
# def get_grid(request):
#     user = request.user
#     sudoku,iscreated = Sudoku.objects.get_or_create(user=user)
#     que, savedState = sudokuData.get_grid(sudoku.current_level, user.id)
#     return Response({'initialGrid': que, 'savedState': savedState})
