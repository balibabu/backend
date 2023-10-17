from rest_framework import status
from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from .models import Clipboard
from .serializers import ClipboardSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

# @api_view(['GET'])
# @permission_classes([IsAuthenticated])
# def get_clips(request):
#     user = request.user
#     clips=Clipboard.objects.filter(user=user).order_by('-copied_on')[:10]
#     serializer=ClipboardSerializer(clips,many=True)
#     return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def upload_clip(request):
    user = request.user
    serializer = ClipboardSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(user=user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# For getting unique clips
from django.db.models import OuterRef, Subquery
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_clips(request):
    user = request.user
    # Subquery to get the latest clip for each unique content
    latest_clips_subquery = Clipboard.objects.filter(
        user=user, content=OuterRef('content')
    ).order_by('-copied_on').values('content')[:1]
    unique_contents = set()  # To store unique content
    unique_clips = []
    clips = Clipboard.objects.filter(
        content__in=Subquery(latest_clips_subquery)
    ).order_by('-copied_on')
    for clip in clips:
        if clip.content not in unique_contents:
            unique_contents.add(clip.content)
            unique_clips.append(clip)

            if len(unique_clips) == 10:  # Stop when you have 10 unique clips
                break
    serializer = ClipboardSerializer(unique_clips, many=True)
    return Response(serializer.data)



