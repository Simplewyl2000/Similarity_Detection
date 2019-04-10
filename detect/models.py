from django.db import models

# Create your models here.
# 保存新建的检测实例
class DetectModel(models.Model):
    ModelName = models.CharField(max_length=32,primary_key = True) # 检测实例名,主键
    DetectAlgorithm = models.CharField(max_length=16) # 算法名
    FeatureConfig = models.TextField() # 特征配置
    FileType = models.CharField(max_length=8) # 文件类型
    DetectFile = models.BinaryField() # 二进制文件
    ctime = models.DateTimeField(auto_now=True)  # 每当你创建一行数据时，Django就会在该行数据中增加一个ctime字段
    uptime = models.DateTimeField(auto_now_add=True)  # 当前表任何一行数据有更新时，Django就会自动更新该字段.