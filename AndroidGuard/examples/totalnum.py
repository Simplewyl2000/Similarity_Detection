import os
import datetime

fileinput="output1.txt"
fileinput1="outputremoveduplicate1.txt"
filein=open(fileinput,'r')
filein1=open(fileinput1,'r')
summ=0
sum1=0
for line in filein:
    a=line.split(' ')
    summ=summ+int(a[1].strip(' ').strip('\n').strip())
print(summ)
for line1 in filein1:
    b=line1.split(' ')
    temp=b[1].strip(' ').strip('\n').strip()
   # print(temp)
    sum1=sum1+int(temp)
print(sum1)
