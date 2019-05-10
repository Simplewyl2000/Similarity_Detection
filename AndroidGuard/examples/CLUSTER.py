import os

path='../output/'
lisfile=os.listdir(path)
omega=[0]*5000
pathfile='omegafrequency.txt'
fileomega=open(pathfile,'w')
#lisfile=os.listdir(basedir)
for filename in lisfile:
   # print (filename)
    f=open(path+filename,'r')
    flines=f.readlines()
    for j in flines:
        jtemp=j.strip('[').strip(']\n').split(',')
        jomega=int(jtemp[1].strip(' '))
        if jomega<5000:
            omega[jomega]=omega[jomega]+1
for i in range(len(omega)):
    if int(omega[i])!=0:
        s=str(i)+' '+str(omega[i])
        fileomega.write(s)
        fileomega.write('\n')

omegadelte=[]
for j in omega:
    if int(j)>50:
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


