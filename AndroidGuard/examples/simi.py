import os
import datetime

file1="../outpte/"
#filename="simi"
lisfile=os.listdir(file1)

#for filename in lcom.txtisfile:
rFile=open(file1+"9.txtduplicate.txt",'r')
rr=open(file1+"2.txtduplicate.txt",'r')
count=0	
for i in rFile.readlines():
    rr=open(file1+"2.txtduplicate.txt",'r')
    for j in rr.readlines():
      #  print(i)
        #print(j)
        if i.strip('\n').strip(' ') == j.strip('\n').strip(' '):
            count=count+1
            break
    rr.close()
print(count)