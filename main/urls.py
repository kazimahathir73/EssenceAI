from django.contrib import admin, include
from django.urls import path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('backend/', include('backend.urls'))
]
