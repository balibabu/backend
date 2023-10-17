from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from .models import File  
from .models import Folder  
from .serializers import FileSerializer  
from .serializers import FolderSerializer  
import os
from django.conf import settings

#####################################################################
###################### Get All Files of a User ######################
#####################################################################
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_all_files(request):
    user = request.user
    files = File.objects.filter(user=user)
    serializer = FileSerializer(files, many=True, context={'request': request})
    return Response(serializer.data)
#######################################################################
###################### Get All Folders of a User ######################
#######################################################################
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_all_folders(request):
    user = request.user
    folders = Folder.objects.filter(user=user)
    serializer = FolderSerializer(folders, many=True)
    return Response(serializer.data)
#####################################################################
#####################################################################

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_files(request,pk):
    user = request.user
    if pk=='null':
        files = File.objects.filter(user=user,folder_id=None)
    else:
        files = File.objects.filter(user=user,folder_id=pk)
    serializer = FileSerializer(files, many=True, context={'request': request})
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def upload_file(request):
    user = request.user 
    serializer = FileSerializer(data=request.data, context={'request': request})
    if serializer.is_valid():
        original_filename = request.data['file'].name
        folder_id = request.data.get('folder_id', None)
        serializer.save(user=user, filename=original_filename, folder_id=folder_id)
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_file(request, pk):
    user = request.user
    try:
        file = File.objects.get(id=pk, user=user)
        file_path = os.path.join(settings.MEDIA_ROOT, str(file.file))
        # Delete the actual file from the server
        if os.path.exists(file_path):
            os.remove(file_path)
        file.delete()
        return Response(status=204)
    except File.DoesNotExist:
        return Response({"detail": "File not found."}, status=404)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_folder(request):
    user = request.user
    try:
        parent_folder_id = request.data['parent_folder_id']
        if parent_folder_id=='null':
            parent_folder = Folder.objects.get(user=user, id=None)
        else:
            parent_folder = Folder.objects.get(user=user, id=parent_folder_id)
    except (KeyError, Folder.DoesNotExist):
        parent_folder=None

    serializer = FolderSerializer(data=request.data)
    
    if serializer.is_valid():
        serializer.save(user=user, parentFolder=parent_folder)
        return Response(serializer.data, status=201)
    
    return Response(serializer.errors, status=400)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_folders(request, pk):
    user = request.user
    if pk=='null':
        folders = Folder.objects.filter(user=user, parentFolder=None)
    else:
        folders = Folder.objects.filter(user=user, parentFolder=pk)
    serializer = FolderSerializer(folders, many=True)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updated_folder_title(request,pk):
    user=request.user
    folder = Folder.objects.get(user=user,id=pk)
    newTitle=request.data.get('title',None)
    if newTitle:
        folder.title=newTitle
        folder.save()
        serializer = FolderSerializer(folder)
        return Response(serializer.data)
    return Response({"error": "Title is required"}, status=400)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_folder(request, pk):
    user = request.user
    try:
        folder = Folder.objects.get(id=pk, user=user)
        folder.delete()
        return Response(status=204)
    except Folder.DoesNotExist:
        return Response({"detail": "Folder not found."}, status=404)