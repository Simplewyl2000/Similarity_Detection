import os
#import matplotlib.pyplot as plt
import numpy
import string

filepath="../output4/"
filename1="../output5/mehodsize.txt"
for root,dirs,files in os.walk(filepath):
    file=open(filename1,'a')
    for f in files:
        file=open(filename1,'a')
        count =len(open(os.path.join(filepath, f), 'r').readlines())
        file.write('%s\n' % count)
    file.close()    

