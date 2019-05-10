import os
import random
import matplotlib.pyplot as plt 
import numpy as np 
from matplotlib.ticker import FuncFormatter

#x=np.array([1,2,3])
y=np.array([0.71, 0.27, 0.039])
#z=np.array([0.011,0.043, 0.087])
z=np.array([1.3, 1.24, 1.17])
plt.plot(y,z,marker='o')
#plt.plot(x,y, marker='o',label='Feature Space Reduction Ratio (p)')
#plt.plot(x,z,marker='*',label='Reconstruction Error Ratio (e)')
#for a,b in zip(x,y):
#    plt.text(a,b,'%1.0f'%(100*b)+'%', ha='left',va='bottom',fontsize=15)

#for a,b in zip(x,z):
  #  plt.text(a,b,'%1.0f'%(b*100)+'%', ha='left',va='bottom',fontsize=15) 
#=['1','2','3']
#plt.xticks(x,g)
def to_percent(temp, position):
    return '%1.0f'%(100*temp)+'%'
plt.gca().yaxis.set_major_formatter(FuncFormatter(to_percent))
#plt.gca().zaxis.set_major_formatter(FuncFormatter(to_percent))
plt.grid(color='black',linewidth='0.3',linestyle='--')
#plt.legend(loc='best',prop={'size': 12})
#yticks=range(0,1.0,0.5)
#plt.xlim(0.0,1.0)
#plt.ylim(0.0,1.0)
font1={'family':'Times New Roman',
'weight':'normal',
'size': 18,}
plt.tick_params(labelsize=15)
plt.grid(color='black',linewidth='0.3',linestyle='--')
#plt.gca().zaxis.set_major_formatter(FuncFormatter(to_percent))
#plt.ylabel(' Ratio',font1)
#plt.xlabel('Experiment No.', font1)
plt.xlabel('Feature Space Compression Ratio (p)')
plt.ylabel('Running Time (h)')
plt.show()  #
