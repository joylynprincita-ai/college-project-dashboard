from django.contrib import admin
from .models import Project

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "mentor",
        "status",
        "deadline",
        "created_at",
    )

    list_filter = (
        "status",
        "mentor",
    )

    search_fields = (
        "title",
        "description",
    )