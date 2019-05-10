import os
import numpy

basedir="../codee/"
##filen="../sum/"
#filenmn="omega.txt"
#filennn=open(filenmn,'w')
#ff=open(filenn,'w')
lisfile=os.listdir(basedir)
sum=0
for filename in lisfile:
    print (filename)
    f=open(basedir+filename,'r')
    #fff=filename.split('.')[0]
    #print(fff)
    #filenn=filen+fff+'sum'+'.txt'
    #ff=open(filenn,'w')
    temp=f.readlines()
    lent=len(temp)
    sum=sum+lent
    # for fline in f:
    #     #sum=0
    #     listnum=fline.strip(' ').strip('\n').strip('[').strip(']').split(',')
    #     #
    #    # print(listnum[0]) 
        
    #     filennn.write(str(listnum[1]))
    #     filennn.write('\n')
        #ff.write(str(sum))
        #ff.write('\n')
print(sum)  #  ff.close()
        


	