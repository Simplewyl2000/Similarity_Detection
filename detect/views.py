from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from Similarity_Detection import settings
import re

def index(request):
    return render(request, 'index.html')

def detect(request):
    pass

def main(request):
    return render(request, 'main.html')

def example(request):
    return render(request, 'examples/all.html')

@csrf_exempt
def realtime(request):
    ResData = {"code": 0, "msg": "oK", "count": 2, "data": [
        {"type": 'APK', "filename": "F1", "algorithm": "A1", "result": "R1", "time": "T1"},
        {"type": 'Binary', "filename": "F2", "algorithm": "A2", "result": "R2", "time": "T2"}]
        }
    if request.method == "GET":
        return JsonResponse(ResData)

def DetectConfig(request):
    return render(request, 'DetectConfig.html')


@csrf_exempt
def DetectConfigSet(request):
    FeatureNum = settings.feature_num
    FeatureList = []
    if request.method == "GET":
        detect_title = request.GET.get('detect_title')
        for num in range(FeatureNum):
            FeatureList.append(request.GET.get('feature[' + str(num+1) + ']'))
        detect_type = request.GET.get('detect_type')
        detect_alg = request.GET.get('detect_alg')
        detect_file = request.GET.get('file')
        ResData = {"code": 0, "msg": "oK",
                   "detect_title": detect_title,
                   "FeatureList": FeatureList,
                   "detect_type": detect_type,
                   "detect_alg": detect_alg,
                   "detect_file": detect_file}
        return JsonResponse(ResData)
    if request.method == "POST":
        ResData = {"code": 0}
        FileSavePath = request.POST.get('FileSavePath')
        ResData['code'] = verify_detect_name(FileSavePath)
        return JsonResponse(ResData)

# 判断检测案例名称是否合法
def verify_detect_name(value):
    if not value:
        return 4
    if not re.match("^[a-zA-Z0-9_\u4e00-\u9fa5\\s·]+$",value):
        return 1 # 有特殊字符
    if re.match("(^\_)|(\__)|(\_+$)",value):
        return 2 # 首尾有下划线
    if re.match("^\d+\d*$",value):
        return 3 # 全为数字
    return 0

@csrf_exempt
def History(request):
    return render(request, 'History.html')

@csrf_exempt
def HistorySelect(request):
    if request.method == "POST":
        ResData = {"code": 0}
        print(request.POST)
        return JsonResponse(ResData)
    
def DetectResult(request):
    return render(request, 'DetectResult.html')
