from rest_framework import serializers
from .models import User


class RegisterSerializer(serializers.ModelSerializer):

    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = [
            "username",
            "email",
            "college_id",
            "password",
            "phone",
            "role"
        ]


    def create(self, validated_data):

        user = User.objects.create_user(
            username=validated_data["username"],
            email=validated_data.get("email"),
            college_id=validated_data["college_id"],
            phone=validated_data.get("phone"),
            role=validated_data["role"],
            password=validated_data["password"]
        )

        return user