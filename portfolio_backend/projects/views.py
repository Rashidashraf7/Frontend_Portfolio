from rest_framework import generics, permissions
from .models import Project
from .serializers import ProjectSerializer

class ProjectListView(generics.ListAPIView):  # Public can only view
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [permissions.AllowAny]

class ProjectCreateView(generics.CreateAPIView):  # Only admin can add
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [permissions.IsAdminUser]


