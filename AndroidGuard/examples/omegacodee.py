import os
import numpy




file1="omegafrequency.txt"
file=open(file1,'r')
listomega=[]
listfrequency=[]
for eachline in file:
    temp=eachline.strip('\n').strip("['").strip("]").split("',")
    #print(temp)
    listomega.append(int(temp[0]))
    listfrequency.append(temp[1])
#print(istomega)

for j in listomega:
    if int(j)<53:
        filewritename='../omegacodee/'+str(j)+'.txt'
        fwritename=open(filewritename,'w')
        basedir="../outputremoveduplicate/"
        lisfile=os.listdir(basedir)
        for filename in lisfile:
            #print (filename)
            f=open(basedir+filename,'r')
            for fline in f:
                listnum=fline.strip(' ').strip('\n').strip('[').strip(']').split(',')
                if int(listnum[1])==int(j):
                    fwritename.write(fline)
                    fwritename.write('\n')
            f.close()
        fwritename.close()

