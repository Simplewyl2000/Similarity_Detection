import os
import random
import matplotlib.pyplot as plt 
import numpy as np
import numpy


fileinput="removeduplicate.txt"
fileoutput="removeduplicatennum.txt"
function=open(fileinput,'r')
functionnum=open(fileoutput,'w')
a=numpy.zeros(152789,int)
#num=numpy.zeros(20000,int)
j=0
for i in function.readlines():
	i=i.strip()
	if not len(i):
		continue
	#temp=num[int(i)]+1
	#num[int(i)]=temp
	a[j]=int(i)
	#a[j]=a[j]*146
	#print(a[j])
	j=j+1


bins=[x for x in range(0,20000,25)]
hist,bins=np.histogram(a,bins)
#print(hist)
#for k in hist:
#	print(k)
#plt.subplot(121)
cdf = np.cumsum(hist/sum(hist))
plt.plot(bins[1:],cdf,'-*',label='After removing duplicate functions')
fileinput1="function.txt"
#fileoutput1="functionnum.txt"
function1=open(fileinput1,'r')
#functionnum1=open(fileoutput1,'w')
a1=numpy.zeros(152789,int)
#num=numpy.zeros(20000,int)
j=0
for i in function1.readlines():
	i=i.strip()
	if not len(i):
		continue
	#temp=num[int(i)]+1
	#num[int(i)]=temp
	a1[j]=int(i)
	#a[j]=a[j]*146
	#print(a[j])
	j=j+1

bins1=[x for x in range(0,20000,25)]
hist1,bins1=np.histogram(a1,bins1)
#print(hist1)
cdf1 = np.cumsum(hist1/sum(hist1))
#print(cdf1)
#cdf=cdf/float(hist.sum())
#cdf1=cdf1/float(hist1.sum())
#print(cdf1)
#plt.plot(cdf)

plt.plot(bins1[1:],cdf1,'o-',label='Before removing duplicate functions')
# plt.subplot(122)
# cdf = stats.cumfreq(a)
# plt.plot(cdf[0])

#plt.show()

#plt.hist(a,bins)
font1={'family':'Times New Roman',
'weight':'normal',
'size': 18,}
##plt.grid(color='black',linewidth='0.3',linestyle='--')
plt.xscale("log")

#
plt.grid(color='black',linewidth='0.3',linestyle='--')
plt.xlabel('Number of Functions per App', font1)
plt.ylabel('CDF', font1)
#plt.ylim(0,10^4)
plt.ylim(0.0,1.0)
#plt.title(" ")
#ax=plt.gca()
#ax.spines['left'].set_color('black')
#ax.spines['right'].set_color('black')
#ax.set_position([0.1,0.1,0.5,0.8])
#plt.legend(loc='best',  bbox_to_anchor=(1.05,1),borderaxespad=0.)
#ax.set_yscale('log')
#hleg1=plt.legend('Before removing duplicate functions','After removing duplicate functions','Orientation','horizontal')
#set(hleg1,'Position',[.13,.94,.4,.05])
##ax.set_xscale('log')
#plt.grid()
#box=ax.get_position()
##ax.set_position([box.x1,box.y0,box.width,box.height*0.8])
#plt.legend(loc='center left',bbox_to_anchor=(0.0,1.05),ncol=3)
plt.legend(loc='best',prop={'size': 15})
plt.tick_params(labelsize=15)
plt.show()