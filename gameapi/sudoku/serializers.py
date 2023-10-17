from rest_framework.serializers import ModelSerializer
from .models import Sudoku


class SudokuSerializer(ModelSerializer):
    class Meta:
        model=Sudoku
        fields='__all__'