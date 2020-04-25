from django.urls import include, path
from rest_framework import routers
from .views import UserAPIView, RegisterAPIView, LoginAPIView, PizzaViewSet, OrderViewSet
from knox.views import LogoutView



router = routers.DefaultRouter()
router.register(r'pizzas', PizzaViewSet)
router.register(r'orders', OrderViewSet)


# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    
]