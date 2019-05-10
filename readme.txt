
根据系统模块创建单独app，分别在各自app文件夹下单独开发：
公共模板放在项目根目录templates文件夹下，引用方式:直接引用文件名
公共静态文件放在项目根目录static文件夹下，引用方式：参考/templates/base.html

模块私有模板放在模块文件夹 app_name/templates/app_name 下，引用方式：参考/Main/views.py
模块私有静态文件放在模块文件夹 app_name/static/app_name 下，引用方式：参考/templates/base.html，修改路径例如{% static "Main/main.js" %}

已设置好总路由，参考/Similarity_Detection/urls.py，各模块路由在模块文件夹下的urls.py文件中单独设置
总路由为一级目录，各模块路由为二级目录

在各模块文件夹下的views.py文件中编写后端逻辑

在各模块文件夹下的models.py文件中配置数据库

各模块文件夹与对应负责人：
    DetectResultHistory         检测-结果-历史        冯冠云
    FuncEmbedCode               函数嵌入编码          侍言
    SampleBaseAnalysis          样本库分析            江帅
    TensorDecompositionSV       张量奇异值分解         吴与伦
    TensorDynamicUpdate         张量动态更新          朱正禹
    ThirdPartyFuncAnalysis      第三方函数分析         江帅
    Main                        首页                  江帅