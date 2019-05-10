import os
import datetime

basedir="../output1/"
basedir1="../xiaoxiaole/"
lisfile=os.listdir(basedir)


#coding=utf-8
 
#import sys, re, os
 
for filename in lisfile:
    print(filename)		
	#reslist=[]
	#f=open(basedir+filename,'r')
	#3iterf=iter(f)
    rFile=open(basedir+filename,'r')
    #wFile=open(basedir1+)
    out="../outpte/"+filename+'duplicate'+'.txt'
    wFile=open(out,'w')
    allLine=rFile.readlines()
    #print(allLine)
    s=set()
    for i in allLine:
        s.add(i)
    print(s)
    for j in s:
        wFile.write(j)
    wFile.close()
	#print((endtime-starttime).seconds)