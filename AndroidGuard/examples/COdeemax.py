import os

basedir="../codeemax17/"
lisfile=os.listdir(basedir)
#filewrite="../codeemax17/"
##ff=open(filewrite+'5.txt','w')
#lisfile=os.listdir(basedir)
totalsum=0
for filename in lisfile:
# print (filename)
    f=open(basedir+filename,'r')
    #temp=f.readlines()
    sum=0
    for temp in f.readlines():
        #print(temp)
        if temp!='('', 1)':
            ttt=temp.split(',')
            tt=ttt[len(ttt)-1].strip('\n').strip(')')
            #print(temp.split(',')[6])
            sum=sum+int(tt)
    print(filename)
    print(sum*345168937/2358523)
    totalsum=totalsum+sum
print(totalsum*345168937/2358523)
    #print(len(temp))*(345168937)/(2358523)
#    # for j in range(17):
#     if len(temp)>=6:
#        temp1=temp[5]
#        ff.write(temp1)
        
        #ff.write(filename[])
        
        #ff.close()
    #ff.write('\n')