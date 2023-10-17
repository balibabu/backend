from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from .serializers import SudokuSerializer
from .models import Sudoku
from .gameData import GameData


sudokuData = GameData()


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_grid(request):
    user = request.user
    sudoku, iscreated = Sudoku.objects.get_or_create(user=user)
    que, savedState = sudokuData.get_grid(sudoku.current_level, user.id)
    return Response({'initialGrid': que, 'savedState': savedState})


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_current_level(request):
    user = request.user
    sudoku = Sudoku.objects.get(user=user)
    message = request.data
    if ('level' in message) and (message['level'] == 'completed'):
        # sudokuData.game_completed(sudoku.current_level,user.id)
        next_level = sudoku.current_level + 1
        serializer = SudokuSerializer(
            sudoku, {'current_level': next_level}, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({'level': next_level})
    return Response({'message': 'Something went wrong'}, status=400)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def save_game_state(request):
    user = request.user
    sudoku = Sudoku.objects.get(user=user)
    data = request.data
    sudokuData.save_state(sudoku.current_level, data['grid'], user.id)
    return Response({'message': 'your game state saved'})
