from rest_framework import generics, permissions
from .models import BlogPost
from .serializers import BlogPostSerializer

class BlogPostListView(generics.ListAPIView):
    queryset = BlogPost.objects.all().order_by('-date_created')
    serializer_class = BlogPostSerializer
    permission_classes = [permissions.AllowAny]

class BlogPostDetailView(generics.RetrieveAPIView):
    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerializer
    permission_classes = [permissions.AllowAny]

class BlogPostCreateView(generics.CreateAPIView):
    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerializer
    permission_classes = [permissions.IsAdminUser]
