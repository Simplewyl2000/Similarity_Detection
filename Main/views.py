from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt




def main(request):
    return render(request, 'Main/main.html')


@csrf_exempt
def realtime(request):
    ResData = {"code": 0, "msg": "oK", "count": 2, "data": [
        {"type": 'APK', "filename": "F1", "algorithm": "A1", "result": "R1", "time": "T1"},
        {"type": 'Binary', "filename": "F2", "algorithm": "A2", "result": "R2", "time": "T2"}]
               }
    if request.method == "GET":
        return JsonResponse(ResData)

