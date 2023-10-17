from rest_framework import serializers
from .models import Clipboard

class ClipboardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Clipboard
        fields = '__all__'