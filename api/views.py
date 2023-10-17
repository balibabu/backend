from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        # Add custom claims
        token['username'] = user.username
        return token


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['POST'])
def registration_view(request):
    username = request.data.get('username')
    password = request.data.get('password')
    firstname=request.data.get('firstname')
    lastname=request.data.get('lastname')
    email=request.data.get('email')
    if User.objects.filter(username=username).exists():
        return Response({'error': 'Username already exists'}, status=status.HTTP_400_BAD_REQUEST)

    user = User(username=username, first_name=firstname, last_name=lastname, email=email)
    user.set_password(password)
    user.save()

    return Response({'message': 'User registered successfully'}, status=status.HTTP_201_CREATED)
