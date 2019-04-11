from django.shortcuts import render
from django.http import JsonResponse


def index(request):
    return render(request, 'index.html')

def detect(request):
    pass

def main(request):
    return render(request, 'main.html')

def example(request):
    return render(request, 'examples/all.html')

def realtime(request):
    ResData = {"code": 0, "msg": "oK", "count": 2, "data": [
        {"type": 'APK', "filename": "F1", "algorithm": "A1", "result": "R1", "time": "T1"},
        {"type": 'Binary', "filename": "F2", "algorithm": "A2", "result": "R2", "time": "T2"}]
        }
    if request.method == "GET":
        page = request.GET.get('page')
        limit = request.GET.get('limit')
        print(page,limit)
        return JsonResponse(ResData)