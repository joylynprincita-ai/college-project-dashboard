from django.db import models
from users.models import User
from projects.models import Project

PRIORITY_CHOICES = (
    ('low', 'Low'),
    ('medium', 'Medium'),
    ('high', 'High'),
)

TASK_STATUS = (
    ('todo', 'To Do'),
    ('progress', 'In Progress'),
    ('done', 'Done'),
)

class Task(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField()

    assigned_to = models.ForeignKey(
        User,
        on_delete=models.CASCADE
    )

    priority = models.CharField(
        max_length=20,
        choices=PRIORITY_CHOICES
    )

    status = models.CharField(
        max_length=20,
        choices=TASK_STATUS,
        default='todo'
    )

    due_date = models.DateField()

    def __str__(self):
        return self.title

    created_at = models.DateTimeField(auto_now_add=True)