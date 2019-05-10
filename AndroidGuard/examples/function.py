import os
import random
import matplotlib.pyplot as plt 

basedir="../outputremoveduplicate/"
fileinput="outputremoveduplicate1.txt"
function=open(fileinput,'w')
list=os.listdir(basedir)

filelist={}
dirlist=[basedir]
i=0

while i<len(dirlist):
	   basedir=dirlist[i]
	   list=os.listdir(basedir)
	   for j in range(0, len(list)):
	   		  path=os.path.join(basedir,list[j])
	   		  if os.path.isfile(path) and ( not path.endswith("~")):
	   		  		 lines=len(open(path,'rU').readlines())
	   		  		 filelist[path]=lines
	   		  		# totalLines+=lines
	   		  elif os.path.isdir(path):
	   		          dirlist.append(path)
	   i=i+1
	   	
for key in filelist:
        function.write(key+' ')
        function.write(str(filelist[key])+'\n')
        
        
print ("complete!")
