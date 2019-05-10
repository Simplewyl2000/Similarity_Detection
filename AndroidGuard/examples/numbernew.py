from pylab import *
from matplotlib.ticker import MultipleLocator, FormatStrFormatter, LogLocator


ymajorLocator=LogLocator(10)
ymajorFormatter=FormatStrFormatter('%1d')
yminorLocator=LogLocator(5)

xmajorLocator=LogLocator(10)
xmajorFormatter=FormatStrFormatter('%1d')
xminorLocator=LogLocator(5)

x=[i for i in range(10, 170, 10)]
y=[80673, 32388, 16842, 8952, 5930, 2826, 1694, 940, 766, 530, 298, 241, 224, 204, 134, 139]
ax=plt.subplot(111)
bar(x,y,1)

size1=['0-10','10-20','20-30','30-40','40-50','50-60','60-70','70-80','80-90','90-100','100-110','110-120','120-130','130-140','140-150']
ax.set_xticks(x)
ax.set_xticklabels(size1,rotation=30)
ax.yaxis.set_major_locator(ymajorLocator)
ax.xaxis.set_major_formatter(xmajorFormatter)
ax.yaxis.set_minor_locator(yminorLocator)

show()