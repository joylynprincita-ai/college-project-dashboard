from django.db import models
from django.contrib.auth.models import AbstractUser

ROLE_CHOICES = (
    ('student', 'Student'),
    ('faculty', 'Faculty'),
    ('admin', 'Admin'),
)

class User(AbstractUser):
    college_id = models.CharField(max_length=20, unique=True)
    role = models.CharField(max_length=20, choices=ROLE_CHOICES)
    phone = models.CharField(max_length=15, blank=True, null=True)

    def __str__(self):
        return f"{self.username} ({self.college_id})"
