from rest_framework import serializers
from .models import File ,Folder

class FileSerializer(serializers.ModelSerializer):
    class Meta:
        model = File  # Update to use the File model
        fields = '__all__'

class FolderSerializer(serializers.ModelSerializer):
    class Meta:
        model=Folder
        fields='__all__'