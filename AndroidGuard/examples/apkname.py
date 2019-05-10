# coding=utf-8
import os
filename=os.listdir('/media/yangjia/usb/pachong')
dir='./Desktop/apk'
i=1

for temp in filename:
    newname='%s' % i +'.apk'
    i=i+1
    os.rename('/media/yangjia/usb/pachong'+'//'+temp,'/media/yangjia/usb/pachong'+'//'+newname)
