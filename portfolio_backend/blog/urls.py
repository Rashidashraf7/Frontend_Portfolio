from django.urls import path
from .views import BlogPostListView, BlogPostDetailView, BlogPostCreateView

urlpatterns = [
    path('', BlogPostListView.as_view(), name='blog-list'),
    path('<int:pk>/', BlogPostDetailView.as_view(), name='blog-detail'),
    path('add/', BlogPostCreateView.as_view(), name='blog-add'),
]
