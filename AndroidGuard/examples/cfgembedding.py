import os
import random
import matplotlib.pyplot as plt 
import numpy as np 

x=[1,4,10,20,40,160,200]
y=[0, 0.000000007356, 0.00000005517,0.0000002207,0.0000008828,0.000001465,0.000096]

plt.plot(x,y, 'o-', label='CFG Embedding Time',color='red')
#plt.legend(loc='lower right',prop={'size': 10})
#yticks=range(0,1.0,0.5)
#plt.xlim(0.0,1.0)
xx=[1,50,100,150,200]
g=['1','50','100','150','200']
plt.xticks(xx,g)
#plt.ylim(0.0,1.0)
font1={'family':'Times New Roman',
'weight':'normal',
'size': 18,}
plt.tick_params(labelsize=15)
plt.grid(color='black',linewidth='0.3',linestyle='--')
plt.yscale("log")
plt.xlabel('Number of Nodes for An Function',font1)
plt.ylabel('CFG Embedding Time (s)',font1)
#plt.title('(b). Compressed Codee Generation Time') 
plt.show()