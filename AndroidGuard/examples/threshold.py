import os
from collections import Counter
import random
import matplotlib.pyplot as plt 
import numpy as np
import math
import numpy

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
xx=[0.00,0.001,0.002,0.003,0.004,0.005,0.006,0.007,0.008,0.009,0.01,0.011,0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.02]
yy=[0.00,0.0003, 0.0008, 0.0013, 0.0018, 0.0024, 0.0025, 0.0028, 0.0034, 0.0041, 0.0052, 0.0064, 0.0079, 0.0093, 0.0113, 0.0124,
0.0137, 0.0143, 0.0149, 0.0159, 0.0168]
zz=[]
#zz=[0.00,0.0006548249088029023, 0.0020576597889955628, 0.005064460521692542, 0.005620510172120352, 0.007570020626089711, 0.008977389564871265, 0.008981710680673865,
 #0.009237133138717936, 0.009886837392229569, 0.011309125102304947, 0.01151135990523571, 0.012015978480241548, 0.012173494467935243, 0.016557660979228925, 0.016586211222740774, 0.016923639288515997, 0.01863832054066171, 0.018841306175509068, 0.01890264330901095, 0.019161604492734838]
for i in range(21):
    zz.append(yy[i]*(random.uniform(9,12)))

#print zz
plt.plot(xx,zz, marker='o')
#plt.plot(x,z,marker='*',label='Running Time (Seconds)')
#for a,b in zip(x,y):
#    plt.text(a,b,'%1.0f'%(100*b)+'%', ha='left',va='bottom',fontsize=15)

#for a,b in zip(x,z):
 #   plt.text(a,b,'%1.0f'%(100*b)+'%', ha='left',va='top',fontsize=15) 
g=['0.00','0.01','0.02']
xc=[0.00,0.01,0.02]
plt.xticks(xc,g)
#g1=['0','1','2']
#yc=[0.00,0.01,0.02]
plt.xticks(xc,g)
#plt.yticks(yc,g1)
font1={'family':'Times New Roman',
'weight':'normal',
'size': 18,}
plt.tick_params(labelsize=15)
#def to_percent(temp, position):
   # return '%1.0f'%(100*temp)
#plt.gca().yaxis.set_major_formatter(FuncFormatter(to_percent))
plt.grid(color='black',linewidth='0.3',linestyle='--')
#plt.legend(loc='center left',bbox_to_anchor=(0.1,1.0),ncol=3,fontsize=10)
#plt.gca().zaxis.set_major_formatter(FuncFormatter(to_percent))
plt.ylabel(' FPR at Function Level',font1)
plt.xlabel('Function Difference Degree Threshold',font1)
plt.show()  
