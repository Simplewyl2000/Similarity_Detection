import os

basedir="../outputremoveduplicate/"
#filen="../sum/"
#filenmn="omega.txt"
#filennn=open(filenmn,'w')
#ff=open(filenn,'w')
lisfile=os.listdir(basedir)
sum=0
for filename in lisfile:
    f=open(basedir+filename,'r')
    temp=f.readlines()
    sum=sum+len(temp)

print(sum)