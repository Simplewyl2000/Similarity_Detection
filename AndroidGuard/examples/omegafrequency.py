import os
from collections import Counter
import random
import matplotlib.pyplot as plt 
import numpy as np
import numpy

filename="omega.txt"
#filename1="omegafrequency.txt"
f=open(filename,'r')
#ff=open(filename1,'w')
mylist=[]
for item in f:
    mylist.append(item)

myset=Counter(mylist)
myset1=sorted(myset.items(),key=lambda x:x[1])
listkey=[]
listvalue=[]

for i in myset1:
    temp=list(i)
    temp[0]=temp[0].strip('\n').strip(' ')
    #print(temp[0])
    if int(temp[0])<1000:
        listkey.append(int(temp[0]))
        listvalue.append(int(temp[1]*(796553011)/(2358523)))
   # ff.write(str(temp))
    #ff.write('\n')

#listkey=myset1.keys()
#listvalue=myset1.values()
#print(listkey)
#print(listvalue)
#listkey1=[]
# listvalue1=[]
# for item1 in listkey:
#     listkey1.append(item1.strip('\n'))
# for item2 in listvalue:
#     listvalue1.append(item2)
#arr=numpy.array(listkey)
#arr1=numpy.array(listvalue)
#ax=plt.gca()
plt.xscale('log')
plt.yscale('log')
plt.legend(loc='best',prop={'size': 15})
#yticks=range(0,1.0,0.5)
#plt.xlim(0.0,1.0)
##xx=[1,50,100,150,200]
#g=['1','50','100','150','200']
#plt.xticks(xx,g)
#plt.ylim(0.0,1.0)
font1={'family':'Times New Roman',
'weight':'normal',
'size': 18,}
plt.tick_params(labelsize=15)
#plt.yticks(range(1,10001,1000))
plt.scatter(listvalue,listkey)
plt.grid(color='black',linewidth='0.3',linestyle='--')
plt.xlabel('Number of Occurrences',font1)
plt.ylabel(r'Length of Embedding $|\vec{c}|$',font1)
#plt.legend(loc='center left',bbox_to_anchor=(0.0,1.05),ncol=3)
plt.show()

#print(myset)
#for item1 in myset.items():
   # i
    #ff.write(str(item1))
    #ff.write(' ')
    #ff.write(str(item1))
    #ff.write('\n')