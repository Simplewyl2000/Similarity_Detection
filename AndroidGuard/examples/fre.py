import os
import numpy

basedir="../codee/"
##filen="../sum/"
#filenmn="omega.txt"
#filennn=open(filenmn,'w')
#ff=open(filenn,'w')
lisfile=os.listdir(basedir)
sum1=[]
for filename in lisfile:
    #print (filename)
    f=open(basedir+filename,'r')
    temp=f.readlines()
   # print()
    #if len(temp)<6000 and  len(temp)>500:
    sum1.append(len(temp))
#print(sorted(sum1))
print(sum(sum1))
#print(sum1)
print(len(sum1))

 #