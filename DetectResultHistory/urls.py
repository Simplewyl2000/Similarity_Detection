

from django.urls import path
from DetectResultHistory import views

urlpatterns = [

    path('DetectConfig/', views.DetectConfig),
    path('DetectConfigSet/', views.DetectConfigSet),
    path('History/', views.History),
    path('HistorySelect/', views.HistorySelect),
    path('DetectResult/', views.DetectResult),


]



