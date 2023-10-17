from rest_framework.serializers import ModelSerializer
from .models import Game
# from .models import Sudoku

class GameSerializer(ModelSerializer):
    class Meta:
        model=Game
        fields='__all__'

# class SudokuSerializer(ModelSerializer):
#     class Meta:
#         model=Sudoku
#         fields='__all__'