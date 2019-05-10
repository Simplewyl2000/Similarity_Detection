import os

filepath="../output4/"
filepath1="../output5/opcode.txt"
file1=open(filepath1,'a')
for root,dirs,files in os.walk(filepath):
    for f in files:
        num=0
        f1=open(os.path.join(filepath,f), 'r')
        flines=f1.readlines()
        for fline in flines:
            try:
                sline=fline.strip('[')
                sline1=sline.rstrip(']\n')
                #print sline1
                slinevec=sline1.split(',')
                temp=int(slinevec[1])*int(slinevec[5])
                num=num+temp
            except:
                continue
        file1.write('%s\n' % num)


