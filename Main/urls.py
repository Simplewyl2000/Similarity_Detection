

from django.urls import path
from Main import views

urlpatterns = [

    path('',views.main),
    path('realtime/', views.realtime),


]



