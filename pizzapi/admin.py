from django.contrib import admin
from .models import Pizza,Order
from django.contrib.auth.models import User


# Register your models here.
admin.site.register(Pizza)
admin.site.register(Order)

