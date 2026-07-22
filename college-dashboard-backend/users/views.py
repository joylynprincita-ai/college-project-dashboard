from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status

from django.contrib.auth import authenticate

from rest_framework_simplejwt.tokens import RefreshToken

from .models import User
from .serializers import RegisterSerializer



# LOGIN
@api_view(['POST'])
@permission_classes([AllowAny])
def login_view(request):

    college_id = request.data.get('college_id')
    password = request.data.get('password')


    try:
        user = User.objects.get(college_id=college_id)

    except User.DoesNotExist:

        return Response(
            {
                "error": "Invalid college ID"
            },
            status=status.HTTP_401_UNAUTHORIZED
        )


    user = authenticate(
        username=user.username,
        password=password
    )


    if user is None:

        return Response(
            {
                "error": "Invalid password"
            },
            status=status.HTTP_401_UNAUTHORIZED
        )


    refresh = RefreshToken.for_user(user)


    return Response({

        "access": str(refresh.access_token),

        "refresh": str(refresh),

        "user": {

            "college_id": user.college_id,

            "role": user.role,

            "username": user.username

        }

    })




# STUDENT REGISTER
@api_view(['POST'])
@permission_classes([AllowAny])
def register_student(request):

    data = request.data.copy()

    data["role"] = "student"


    serializer = RegisterSerializer(data=data)


    if serializer.is_valid():

        serializer.save()

        return Response(
            {
                "message": "Student registered successfully"
            },
            status=status.HTTP_201_CREATED
        )


    return Response(
        serializer.errors,
        status=status.HTTP_400_BAD_REQUEST
    )





# FACULTY REGISTER
@api_view(['POST'])
@permission_classes([AllowAny])
def register_faculty(request):

    data = request.data.copy()

    data["role"] = "faculty"


    serializer = RegisterSerializer(data=data)


    if serializer.is_valid():

        serializer.save()

        return Response(
            {
                "message": "Faculty registered successfully"
            },
            status=status.HTTP_201_CREATED
        )


    return Response(
        serializer.errors,
        status=status.HTTP_400_BAD_REQUEST
    )