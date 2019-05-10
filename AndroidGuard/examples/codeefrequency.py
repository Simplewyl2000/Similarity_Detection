import os
import numpy
import operator
import os
from collections import Counter
import random
import matplotlib.pyplot as plt 
import numpy as np
import numpy
import datetime
from scipy import stats
import matplotlib.pyplot as plt
import seaborn as sns
basedir="../omegacodee/"
lisfile=os.listdir(basedir)
#lisfile=os.listdir(basedir)
for filename in lisfile:
   # print (filename)
    f=open(basedir+filename,'r')
    count_dict={}
    for line in f.readlines():
        line=line.strip()
        count=count_dict.setdefault(line, 0)
        count+=1
        count_dict[line]=count
    sorted_count_dict=sorted(count_dict.items(),key=operator.itemgetter(1),reverse=True)
    filewritename='../codee/'+filename.split('.')[0]+'.txt'
    fwritename=open(filewritename,'w')
    for item in sorted_count_dict:
        fwritename.writelines(str(item))
        #fwritename.write(str(item[1]))
        fwritename.write('\n')
