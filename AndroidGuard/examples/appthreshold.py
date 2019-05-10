import numpy as np
from matplotlib import pyplot as plt
import random 
#plt.figure(figsize=(9,6)) 
n = 8 
#X = np.arange(n)+1 
#numpy.random.uniform(low=0.0, high=1.0, size=None), normal #uniform均匀分布的随机数，normal是正态分布的随机数，0.5-1均匀分布的数，一共有n个 
##Y1 =random.uniform(0.5,1.0,n) 
#Y2 =random.uniform(0.5,1.0,n) 
X=np.array([0.80, 0.85,0.90,0.95,1.00])
# Y1=[]
# Y2=[]
# for i in range(5):
#     temp=random.uniform(517,567)
#     Y1.append(temp)
#     temp1=random.uniform(517,532)
#     Y2.append(temp1)
Y1=np.array([564,557,548,522,493])
Y2=np.array([558,557,548,522,493])
print(Y1)
print(Y2)

plt.bar(X,Y1,width = 0.02,facecolor = 'lightskyblue',edgecolor = 'white',label='Detected by our approach') 
#width:柱的宽度 
plt.bar(X+0.02,Y2,width = 0.02,facecolor = 'yellowgreen',edgecolor = 'white',label='Manually check') 
#水平柱状图plt.barh，属性中宽度width变成了高度height 
# #打两组数据时用+ #facecolor柱状图里填充的颜色 #edgecolor是边框的颜色 #想把一组数据打到下边，在数据前使用负号 
#plt.bar(X#, Y2, width=0.35, facecolor='yellowgreen', edgecolor='white') #给图加text 
for x,y in zip(X,Y1): 
    plt.text(x, y+0.05,  y, ha='center', va= 'bottom') 
for x,y in zip(X,Y2): 
    plt.text(x+0.02, y+0.05,  y, ha='center', va= 'bottom') 
#plt.ylim(0,+1.25) 
#plt.legend(loc='best',prop={'size': 15})
font1={'family':'Times New Roman',
'weight':'normal',
'size': 18,}
plt.tick_params(labelsize=15)
plt.grid(color='black',linewidth='0.3',linestyle='--')
plt.ylabel('Number of Clone Pairs',font1)
plt.xlabel('App Similarity Degree Threshold $\delta_a$',font1)
plt.legend(loc='center left',bbox_to_anchor=(0.0,1.05),ncol=3,fontsize=12)
plt.show()


