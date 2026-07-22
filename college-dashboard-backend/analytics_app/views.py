from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from projects.models import Project
from tasks.models import Task


class DashboardStatsView(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request):

        data = {
            "total_projects": Project.objects.count(),
            "total_tasks": Task.objects.count(),
            "completed_tasks": Task.objects.filter(status="done").count(),
            "pending_tasks": Task.objects.exclude(status="done").count(),
        }

        return Response(data)