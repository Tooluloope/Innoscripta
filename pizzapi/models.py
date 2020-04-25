from django.db import models
from django.utils import timezone

class Pizza(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=60)
    desc = models.CharField(max_length=150)
    price = models.IntegerField()
    url = models.CharField(max_length=250)
    def __str__(self):
        return self.name


class Order(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=60)
    email = models.CharField(max_length=150)
    address = models.CharField(max_length=150)
    total = models.IntegerField()
    created_at = models.DateTimeField(default=timezone.now)
    item = models.ManyToManyField(Pizza)


    def __str__(self):
        return self.name


