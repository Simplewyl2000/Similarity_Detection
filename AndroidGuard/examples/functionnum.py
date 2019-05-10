import os
import random
import matplotlib.pyplot as plt 
import numpy as np 

fileinput="function.txt"
#fileinput='removeduplicate.txt'
fileoutput="functionnum.txt"
function=open(fileinput,'r')
functionnum=open(fileoutput,'w')
a=[]
#num=numpy.zeros(20000,int)
j=0
for i in function.readlines():
	i=i.strip()
	if not len(i):
		continue
	#temp=num[int(i)]+1
	#num[int(i)]=temp
	a.append(int(i))
	#a[j]=a[j]*146
	#print(a[j])
	j=j+1

#bins=[x for x in range(0,10000,5)]
bins=[x for x in range(5,20000,25)]
hist,bins=np.histogram(a,bins)
#for k in hist:
#	print(k)
plt.yscale("log")
#plt.xlabel('Number of Nodes for An Function')
plt.hist(a,bins,color='blue',label='Before removing')
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
plt.grid(color='black',linewidth='0.3',linestyle='--')
plt.xlabel('Number of Functions per Aspp',font1)
plt.ylabel('Number of Occurrence',font1)
#plt.title(" ")

plt.show()
