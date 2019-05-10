import numpy as np
#simport matplotlib.mlab as mlab
import matplotlib.pyplot as plt
import string
#print 11
filepath="../output3/methodnum.txt"
file=open(filepath,'r')
x=[i for i in range(0,40000,4000)]
y=[]

for line in file:
    y.append(int(string.atof(line.replace("\r\n",""))*1527890/43986))

print y

fig=plt.figure(1)

plt.plot(x,y,'*-',0.4, color="black")
#size1=['0-100000','10-20','20-30','30-40','40-50','50-60','60-70','70-80','80-90','90-100','100-110','110-120','120-130','130-140','140-150']
#print y
#plt.xlim(0,30000000)
#plt.ylim(0,300)
size1=['0-4','4-8','8-12','12-16','16-20','20-24','24-28','28-32','32-36','36-40']
plt.xticks(x, size1)
#splt.yscale('log')
plt.xlabel('number of methods per app (1e3)')
plt.ylabel('number for corrending methods')
plt.title('number for corrending methods per app')
plt.grid(color='black',linewidth='0.3',linestyle='--')
plt.show()
