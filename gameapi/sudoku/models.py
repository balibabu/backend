from django.db import models
from django.contrib.auth.models import User

class Sudoku(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    current_level=models.IntegerField(default=1)
    