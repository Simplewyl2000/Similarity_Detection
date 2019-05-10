from __future__ import division
#import matplotlib.pyplot as plt
import numpy
import string
from matplotlib.ticker import MultipleLocator, FormatStrFormatter
from pylab import *
# mean=80
# sigma=5
# x=mean+sigma*np.random.randn(10000)
x=[i for i in range(10, 170, 10)]
y=[80673/152789, 32388/152789, 16842/152789, 8952/152789, 5930/152789, 2826/152789, 1694/152789, 940/152789, 766/152789, 530/152789, 298/152789, 241/152789, 224/152789, 204/152789, 134/152789, 139/152789]
y=[80673, 32388, 16842, 8952, 5930, 2826, 1694, 940, 766, 530, 298, 241, 224, 204, 134, 139]
z=[0,10,100,1000,10000,100000]
#fig, ax=plt.subplots()
#fig=plt.figure()
plt.bar(x,y,9,color="black")
#ax=subplot(111)
#plt.xlim(0,160)

#ymajorLocator=MultipleLocator(10)
#xmajorLocator=MultipleLocator(20)
#ax=subplot(111)
#ax.yaxis.set_major_locator(ymajorLocator)
#plt.yticks(z)
size1=['0-10','10-20','20-30','30-40','40-50','50-60','60-70','70-80','80-90','90-100','100-110','110-120','120-130','130-140','140-150']
plt.xticks(x, size1,rotation=30)
plt.tick_params(labelsize=15)
plt.yscale("log")
font1={'family':'Times New Roman',
'weight':'normal',
'size': 18,}
plt.xlabel('Size per App',font1)
plt.ylabel('The Number of Occurrences',font1)
plt.title('Occurrences for Different Size per App',font1) 
plt.show()

