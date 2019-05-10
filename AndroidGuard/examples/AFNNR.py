import os
import random
import matplotlib.pyplot as plt 
import numpy as np 
from matplotlib.ticker import FuncFormatter
x=[]
y=[]
for i in range(11):
    temp=random.uniform(0,10)
    x.append(temp)
    temp1=random.uniform(0,50)
    y.append(temp1)

#for j in range(11)

# y=[]
# for j in range(20):
#     temp=random.uniform(0.0,0.015)
#     y.append(temp)

#print(sorted(x))
#print(sorted(y))
#xx=[0, 0.00036, 0.00061, 0.00097, 0.0014, 0.0019, 0.0023, 0.0029, 0.0033, 0.0039, 0.0080, 0.0081, 0.0086, 0.0093, 0.0110, 
#0.0124, 0.0131, 0.0144, 0.0155, 0.0161, 0.0179, 0.0194]
xx=[0.50,0.55,0.60,0.65,0.70,0.75,0.80,0.85,0.90,0.95,1.0]
#yy=[0.00,0.0003, 0.0008, 0.0013, 0.0018, 0.0024, 0.0025, 0.0028, 0.0034, 0.0041, 0.0052, 0.0064, 0.0079, 0.0093, 0.0113, 0.0124,
#0.0137, 0.0143, 0.0149, 0.0159, 0.0168]
x=[1.23/5, 1.87/5, 2.56/5, 3.67/5, 3.74/5, 4.06/5, 5.27/5, 6.44/5, 8.84/5, 9.43/5, 9.84/5]
#y=[0.3489624280332293, 0.4930625939251604, 2.1650697225594144, 2.2115791340906448, 2.965555888186962, 3.0829638197303915, 3.174184619743891, 3.4639955303836256, 4.552018464253761, 4.597912906250024, 4.952763474643249]
y=[48.3,39.3,26.4,15.9,7.99,5.59,3.23,2.76,1.94,1.55,1.12]
plt.plot(xx,x, '-*',label='FFPR (%)')
plt.plot(xx,y,'-+',label='FFNR (%)')
plt.tick_params(labelsize=15)
#plt.plot(x,z,marker='*',label='Running Time (Seconds)')
#for a,b in zip(x,y):
#    plt.text(a,b,'%1.0f'%(100*b)+'%', ha='left',va='bottom',fontsize=15)

#for a,b in zip(x,z):
 #   plt.text(a,b,'%1.0f'%(100*b)+'%', ha='left',va='top',fontsize=15) 
#g=['50','0.01','0.02']
#xc=[0.00,0.01,0.02]
#plt.xticks(xc,g)
#g1=['0','1','2']
#yc=[0,1,2]
#plt.xticks(xc,g)
#plt.yticks(yc,g1)
#def to_percent(temp, position):
   # return '%1.0f'%(100*temp)
#plt.gca().yaxis.set_major_formatter(FuncFormatter(to_percent))
plt.grid(color='black',linewidth='0.3',linestyle='--')
#plt.legend(loc='best',prop={'size': 12})
#yticks=range(0,1.0,0.5)
#plt.xlim(0.0,1.0)
#plt.ylim(0.0,1.0)
font1={'family':'Times New Roman',
'weight':'normal',
'size': 18,}
plt.grid(color='black',linewidth='0.3',linestyle='--')
plt.legend(loc='best',prop={'size': 15})
#plt.legend(loc='best',bbox_to_anchor=(0.1,1.0),ncol=3,fontsize=15)
#plt.gca().zaxis.set_major_formatter(FuncFormatter(to_percent))
plt.ylabel(' Ratio',font1)
plt.xlabel('App Similarity Degree Threshold $\delta_a$ ',font1)
plt.show()  
