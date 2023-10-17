from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Clipboard(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    content = models.TextField() 
    copied_on=models.DateTimeField(auto_now_add=True)