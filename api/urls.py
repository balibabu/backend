from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from .views import registration_view, MyTokenObtainPairView

urlpatterns = [
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', registration_view, name='user_registration'),
]
