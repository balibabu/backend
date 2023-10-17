from django.contrib import admin

# Register your models here.
from .models import Game
from .sudoku.models import Sudoku
admin.site.register(Game)
admin.site.register(Sudoku)