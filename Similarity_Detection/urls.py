"""Similarity_Detection URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from Main import views



# 总路由设置，此处均为一级目录
urlpatterns = [


    path('admin/', admin.site.urls),

    path('',views.main),
    path('main/',include('Main.urls')),
    path('DetectResultHistory/',include('DetectResultHistory.urls')),
    path('FuncEmbedCode/', include('FuncEmbedCode.urls')),
    path('SampleBaseAnalysis/', include('SampleBaseAnalysis.urls')),
    path('TensorDecompositionSV/', include('TensorDecompositionSV.urls')),
    path('TensorDynamicUpdate/', include('TensorDynamicUpdate.urls')),
    path('ThirdPartyFuncAnalysis/', include('ThirdPartyFuncAnalysis.urls')),


]



