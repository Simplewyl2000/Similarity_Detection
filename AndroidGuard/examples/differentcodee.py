import os
import numpy
import operator

from collections import Counter
import random
import matplotlib.pyplot as plt 
import numpy as np
import numpy
import datetime
from scipy import stats
import matplotlib.pyplot as plt

basedir="../omegacodee/"
lisfile=os.listdir(basedir)
listnum={}
#listomega=[]
#lisfile=os.listdir(basedir)
for filename in lisfile:
   # print (filename)
    count=0
    Temp=filename.split('.')[0]
    f=open(basedir+filename,'r')
    while True:
        buffer=f.read(1024*8192)
        if not buffer:
            break
        count+=buffer.count('\n')
    f.close()
    listnum[Temp]=count

#print(listomega)
#print(listnum)

basedir1="../codee/"
lisfile1=os.listdir(basedir1)
listnum1={}
#listomega1=[]
#lisfile=os.listdir(basedir)
for filename1 in lisfile1:
   # print (filename)
    count1=0
    temp1=filename1.split('.')[0]
    f1=open(basedir1+filename1,'r')
    while True:
        buffer=f1.read(1024*8192)
        if not buffer:
            break
        count1+=buffer.count('\n')
    f1.close()
    listnum1[temp1]=count1

#print(listnum1)
sortedlistnum=sorted(listnum.items(),key=operator.itemgetter(1),reverse=True)
sortedlistnum1=sorted(listnum1.items(),key=operator.itemgetter(1),reverse=True)
print(type(sortedlistnum))
listkey=[]
listvalue=[]
#i=0
for item in sortedlistnum:
    listitem=list(item)
    listkey.append((listitem[0]).strip("'"))
    listvalue.append((listitem[1])*(796553011)/(2358523))   

sumbefore=sum(listvalue)
listkey1=[]
listvalue1=[]
#i=0
for item1 in sortedlistnum1:
    listitem1=list(item1)
    listkey1.append((listitem1[0]).strip("'"))
    listvalue1.append((listitem1[1])*(796553011)/(2358523))   
    
#ax=plt.gca()
plt.xscale('log')
plt.yscale('log')
#plt.yticks(range(1,10001,1000))
#plt.plot(listkey,listvalue,label=r"Functions per $|\vec{c}|$")
#plt.plot(listkey1,listvalue1,'-+',label=r"Different Functions per $|\vec{c}|$")
plt.plot(listkey,listvalue,label=r"Number of Functions per $\omega$")
plt.plot(listkey1,listvalue1,'-+',label=r"Number of Different Functions per $\omega$")
plt.legend(loc='best',prop={'size': 12})
#yticks=range(0,1.0,0.5)
#plt.xlim(0.0,1.0)
##xx=[1,50,100,150,200]
#g=['1','50','100
# ','150','200']
#plt.xticks(xx,g)
#plt.ylim(0.0,1.0)
plt.grid(color='black',linewidth='0.3',linestyle='--')
font1={'family':'Times New Roman',
'weight':'normal',
'size': 18,}
plt.tick_params(labelsize=15)
plt.ylabel('Number of Occurences',font1)
#plt.xlabel(r'$|\vec{c}|$',font1)
plt.xlabel(r'$\omega $',font1)
#plt.legend(loc='center left',bbox_to_anchor=(0.0,1.05),ncol=3)
plt.show()
    