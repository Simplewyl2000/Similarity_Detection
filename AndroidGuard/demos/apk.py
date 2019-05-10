#import os

# def listdir(path ,list_name):
#     for file in os.listdir(path):
#         file_path = os.path.join(path, file) 
#         if os.path.isdir(file_path):
#             listdir(file_path, list_name)
#             else:
#                 list_name.append(file_path) 
# import glob
# import disassembler_analysis

# for filename in glob.glob(r'../exazmples/apk/*.apk'):
import os

def eachFile(filepath):
    child=[]
    pathDir =  os.listdir(filepath)
    for allDir in pathDir:
        child.append(os.path.join('%s%s' % (filepath, allDir)))
    print child
    return child  

if __name__ == '__main__':
    filePath = "/media/yangjia/usb/pachong/"
    eachFile(filePath)  