from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status

from .models import Task, TaskDependency
from .serializers import TaskSerializer

class TaskViewSet(ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

    @action(detail=True, methods=['post'])
    def add_dependency(self, request, pk=None):
        task = self.get_object()
        depends_on_id = request.data.get("depends_on_id")

        if task.id == depends_on_id:
            return Response(
                {"error": "Circular dependency detected"},
                status=status.HTTP_400_BAD_REQUEST
            )

        TaskDependency.objects.create(
            task=task,
            depends_on_id=depends_on_id
        )

        return Response({"message": "Dependency added"})
