from django.urls import path,include
from . import views
from .sudoku.views import get_grid,update_current_level,save_game_state


urlpatterns = [
    path('log/',views.log_game_stats,name='add-log'),
    path('logs/<str:title>/',views.get_old_stats,name='getgamestats'),
    path('sudoku/grid/', get_grid, name='get_sudoku_grid'),
    path('sudoku/update-level/', update_current_level, name='update-level'),
    path('sudoku/save-state/', save_game_state, name='save-state'),
]
