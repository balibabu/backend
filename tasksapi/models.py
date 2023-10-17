from django.db import models
from django.contrib.auth.models import User

class Task(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    title = models.CharField(max_length=255) 
    description = models.TextField()  
    created_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
