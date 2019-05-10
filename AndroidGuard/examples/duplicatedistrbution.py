import os
import random
import matplotlib as mpl
import matplotlib.pyplot as plt 
import numpy as np
import numpy


y=[0.1707,0.4494,0.4657,0.5415,0.5624,0.3529,0.304,0.621,0.3276,0.5743,0.6252]
x=[41,1482,3238,8247,5917,1493,477,15503,1041,10206,16551]
x.sort()
y.sort()
# ax=plt.gca()
# ax.spines['top'].set_visible(True)
# ax.spines['bottom'].set_visible(True)
# ax.spines['left'].set_visible(True)
# ax.spines['right'].set_visible(True)
#ax.set_xscale('log')
#plt.figure(num=1,figsize=(8,6),)
font1={'family':'Times New Roman',
'weight':'normal',
'size': 18,}
plt.grid(color='black',linewidth='0.3',linestyle='--')
#plt.yscale("log")
plt.plot(x,y,linestyle='-',color='black')
plt.xlabel("Number of Functions per App",font1 )
plt.ylabel("Proportion of Duplicate Functions",font1)
plt.tick_params(labelsize=15)
#plt.grid(color='black',linewidth='0.3',linestyle='--')
plt.show()