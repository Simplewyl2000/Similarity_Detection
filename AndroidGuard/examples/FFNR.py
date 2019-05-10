import os
from collections import Counter
import random
import matplotlib.pyplot as plt 
import numpy as np
import math
import numpy
import datetime

from matplotlib.ticker import FuncFormatter
x=[]
for i in range(20):
    temp=random.uniform(0.0,0.02)
    x.append(temp)

y=[]
for j in range(20):
    temp=random.uniform(0.0,0.015)
    y.append(temp)

print(sorted(x))
print(sorted(y))
#xx=[0, 0.00036, 0.00061, 0.00097, 0.0014, 0.0019, 0.0023, 0.0029, 0.0033, 0.0039, 0.0080, 0.0081, 0.0086, 0.0093, 0.0110, 
#0.0124, 0.0131, 0.0144, 0.0155, 0.0161, 0.0179, 0.0194]
codee=[0,0.805,0.812,0.827,0.833,0.849,0.855,0.869,0.887,0.898,0.93,0.939,0.0947,0.955,0.956,0.957,0.958,0.959,0.960,0.960]#0.960,0.960]
yy=[0.0,0.231, 0.568, 0.623, 0.678, 0.724, 0.745, 0.778, 0.784, 0.791, 0.802, 0.816, 0.829, 0.833, 0.838, 0.841,0.844, 0.845,0.845,0.845,0.845]# 0.0149, 0.0159, 0.0168]
zz=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

plt.plot(xx,yy,marker='*',label='FFPR(%)')
plt.plot(xx,zz, '--',label='FFNR(%)')
#plt.plot(x,z,marker='*',label='Running Time (Seconds)')
#for a,b in zip(x,y):
   # plt.text(a,b,'%1.0f'%(100*b)+'%', ha='left',va='bottom',fontsize=15)

#for a,b in zip(x,z):
 #   plt.text(a,b,'%1.0f'%(100*b)+'%', ha='left',va='top',fontsize=15) 
g=['0','10','20','30','40','50','60','70','80','90','100','110','120','130','140','150'
,'160','170','180','190','200']
xc=[i for i in range(0,200,10)]
plt.xticks(xc,g)
g1=['0','1','2']
yc=[0,0.01,0.02]
plt.xticks(xc,g)
plt.yticks(yc,g1)
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
#def to_percent(temp, position):
   # return '%1.0f'%(100*temp)
#plt.gca().yaxis.set_major_formatter(FuncFormatter(to_percent))
plt.grid(color='black',linewidth='0.3',linestyle='--')
#plt.legend(loc='center left',bbox_to_anchor=(0.1,1.0),ncol=3,fontsize=10)
#plt.gca().zaxis.set_major_formzzatter(FuncFormatter(to_percent))
plt.ylabel(' Ratio',font1)
plt.xlabel('Function Difference Degree Threshold $\delta_f$',font1)
plt.show()  
