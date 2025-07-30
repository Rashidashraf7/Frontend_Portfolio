from django.urls import path
from .views import ProjectListView, ProjectCreateView

urlpatterns = [
    path('', ProjectListView.as_view(), name='project-list'),
    path('add/', ProjectCreateView.as_view(), name='project-add'),
]
