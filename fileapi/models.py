from django.db import models
from django.contrib.auth.models import User

class Folder(models.Model):
    user=models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    parentFolder=models.ForeignKey('self',on_delete=models.CASCADE,null=True)
    title=models.CharField(max_length=250, null=True)
    created_on = models.DateTimeField(auto_now_add=True)

class File(models.Model):
    user=models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    folder=models.ForeignKey(Folder,on_delete=models.CASCADE, null=True)
    file = models.FileField(upload_to='files/')
    filename=models.CharField(max_length=250, null=True)
    uploaded_on = models.DateTimeField(auto_now_add=True)
    # folder=models.CharField(max_length=250,default='_home')