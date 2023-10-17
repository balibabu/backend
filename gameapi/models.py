from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Game(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    gameTitle=models.CharField(max_length=50)
    startedAt=models.DateTimeField()
    finishedAt=models.DateTimeField()
    score=models.IntegerField()


# class Sudoku(models.Model):
#     user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
#     current_level=models.IntegerField(default=1)
    