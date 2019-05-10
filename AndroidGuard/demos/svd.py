#coding=utf-8
import re
import math
import itertools
import numpy as np
import pandas as pd
import datetime
import threading
import numpy
import scipy
import unittest
import nearpy.utils.utils
#import matplotlib.pyplot as plt
import scipy.cluster.hierarchy as sch
from scipy.spatial.distance import pdist, squareform
from scipy.spatial.distance import pdist
from sklearn.cluster import MiniBatchKMeans, KMeans
from sklearn.metrics.pairwise import pairwise_distances_argmin
from sklearn.datasets.samples_generator import make_blobs
from nearpy import Engine
from nearpy.distances import CosineDistance
from nearpy.hashes import RandomBinaryProjections, RandomBinaryProjectionTree, HashPermutations, HashPermutationMapper

#import matplotlib.pylab as plt

def f_file_open(trace_string):
    """open the document_set, save in the list called txt"""
    f=open(trace_string,'r')
    txt=f.readlines()
    f.close()
    return txt

def f_vector_found(txt):
    """calculate all of the word in the document set---构造词空间"""
    word_list=[]
    for line in txt:
        line_clean=line.split()
        for word in line_clean:
            if word not in word_list:
                word_list.append(word)
            else:
                pass
    return word_list

def f_document_vector(document,word_list):
    """transform the document to vector---文档向量化"""
    vector=[]
    document_clean=document.split()
    for word in word_list:
        a=document_clean.count(word)
        vector.append(a)
    return vector

# def line_vector(fileline):
#     vector=[]
#     if fileline[1] != '0':
#         fileline_clean = fileline.strip()

#         #print fileline_clean
#         vector.append(fileline_clean)
#     print np.array(vector)   
#     return np.array(vector)

def f_svd_calculate(document_array):
    """calculate the svd and return the three matrics"""
    U,S,V=np.linalg.svd(document_array)
    return (U,S,V)

def f_process_matric_U(matric_U,Save_N_Singular_value):
    """according to the matric U, choose the words as the feature in each document,根据前N个奇异值对U进行切分,选择前N列""" 
    document_matric_U=[]
    for line in matric_U:
        line_new=line[:Save_N_Singular_value]
        document_matric_U.append(line_new)
    return document_matric_U

def f_process_matric_S(matric_S,Save_information_value):
    """choose the items with large singular value,根据保留信息需求选择奇异值个数"""
    matricS_new=[]
    S_self=0
    N_count=0
    Threshold=sum(matric_S)*float(Save_information_value)
    for value in matric_S:
        if S_self<=Threshold:
            matricS_new.append(value)
            S_self+=value
            N_count+=1
        else:
            break
    print ("the %d largest singular values keep the %s information " %(N_count,Save_information_value))
    return (N_count,matricS_new)


def f_process_matric_SS(matric_S,Save_N_Singular_value):
    """according to the matric V, choose the words as the feature in each document,根据前N个奇异值对V进行切分,选择前N行"""
    #document_matric_S=[]
    document_matric_SS=matric_S[:Save_N_Singular_value]
    return document_matric_SS

def f_process_matric_V(matric_V,Save_N_Singular_value):
    """according to the matric V, choose the words as the feature in each document,根据前N个奇异值对V进行切分,选择前N行"""
    document_matric_V=matric_V[:Save_N_Singular_value]
    return document_matric_V

def f_combine_U_S_V(matric_u,matric_s,matirc_v):
    """calculate the new document对奇异值筛选后重新计算文档矩阵"""
    
    new_document_matric=np.dot(np.dot(matric_u,np.diag(matric_s)),matirc_v)
    return new_document_matric


def f_combine_U_A(matric_u,matric_a):
    """calculate the new document对奇异值筛选后重新计算文档矩阵"""
    new_matric=np.dot(matric_u,matric_a)
    return new_matric

def f_matric_to_document(document_matric,word_list_self):
    """transform the matric to document,将矩阵转换为文档"""
    new_document=[]
    for line in document_matric:
        count=0
        for word in line:
            if float(word)>=0.9:                                                                                     #转换后文档中词选择的阈值
                new_document.append(word_list_self[count]+" ")
            else:
                pass
            count+=1
        new_document.append("\n")
    return new_document


def f_save_file(trace,document):
    f=open(trace,'a')
    for line in document:
        for word in line:
            f.write(word)

trace_open="../output2/total.txt"
trace_save="../output2/positive.txt"
trace="../output5/tim.txt"
txt=f_file_open(trace_open)
txt1=f_file_open(trace_save)
txt2=f=open(trace,'a')
word_vector=f_vector_found(txt)
#print (len(word_vector))
document=[]
document1=[]
Num_line=0

for line in txt:                                #transform the document set to matric
    Num_line=Num_line+1
    line=line.strip()
    line=line.strip('[]')
    line=line.split(", ")
    if(line[0]!=line[1]!=line[2]!=line[3]!=0):
        document.append(line)
        #document1.append(line)
        
for line in txt1:                                #transform the document set to matric
    Num_line=Num_line+1
    line=line.strip()
    line=line.strip('[]')
    line=line.split(", ")
    if(line[0]!=line[1]!=line[2]!=line[3]!=0):
        document1.append(line)

documentarr=np.array(document)
documentarr1=np.array(document1)
#print documentarr
documentarr=documentarr.astype(int)
documentarr1=documentarr1.astype(int)
#    document_vector=line_vector(line)
#   document.append(document_vector)
#print (document)
documentarrt=documentarr.transpose()
documentarrt1=documentarr1.transpose()
UU,SS,VV=f_svd_calculate(documentarrt)
#print SS
#print UU
#print VV
#documentfft=np.fft.rfftn(documentarrt)
#U,S,V=f_svd_calculate(documentfft)
#UARR=np.array(U)
# print U.shape
# print S.shape
# print V.shape
#print V
#print UARR
#UFFT=np.fft.irfftn(UARR)
#print UFFT.shape
N_count=3
#print S.shape
document_matric_S=np.array(f_process_matric_SS(SS,N_count))
#print document_matric_S
document_matric_U=np.array(f_process_matric_U(UU,N_count))
#print document_matric_U
document_matric_V=np.array(f_process_matric_V(VV,N_count))
#print document_matric_V
UT=document_matric_U.transpose()
#print UT
#print documentfft
#print f_combine_U_S_V(UU,SS,VV)
new_document_matric=f_combine_U_A(UT,documentarrt)
new_compare=f_combine_U_A(UT,documentarrt1)
#new_matric1=f_combine_U_A(np.diag(S),V)
#print new_document_matric
#print new_document_matric1
#print documentfft
#print documentarr.shape
#print documentarrt-f_combine_U_S_V(document_matric_U,document_matric_S,document_matric_V)
#A=f_combine_U_A(UU.transpose(),documentarrt)
#B=f_combine_U_A(S,V.transpose())
#print document_matric_V.shape
timee=0
starttime=datetime.datetime.now()
B=f_combine_U_A(np.diag(document_matric_S),document_matric_V)      
endtime=datetime.datetime.now()
timee=timee+(endtime-starttime).seconds
txt2.write(timee)
#print timee

#print new_document_matric-B
#******************************************************************************************************
# from sklearn.cluster import KMeans
# from scipy.cluster.vq import whiten
# #***************************************************************************************************
# #print new_document_matric.shape
# #print B
# # dis=pdist(B.transpose(),'euclidean')
# # BB=squareform(dis,force='no',checks=True)
# # Z=sch.linkage(BB, method='average')
# # cluster=sch.fcluster(Z, t=1,criterion='inconsistent')
# #******************************************************************************************************
# n_clusters=10
# model=KMeans(n_clusters=10, n_jobs=20, max_iter=20)
# model.fit(whiten(B.transpose()))
# r1=pd.Series(model.labels_).value_counts() #statistics number
# r2=pd.DataFrame(model.cluster_centers_)
# r=pd.concat([r2,r1], axis=1)
#**************************************************************************************************
from sklearn.cluster import MiniBatchKMeans
from sklearn import datasets
n_clusters=40
model=MiniBatchKMeans(n_clusters)
model.fit(B.transpose())
pre_clu=model.labels_
pre_clu_cen=model.cluster_centers_
pre_lable_uniqe=np.unique(pre_clu)
#print type(r2)
#print model.cluster_centers_
C=B.transpose()
Blen=len(B.transpose())
#print Blen
#print B[:,2]
clusresult=[]
for i in xrange(n_clusters):
    clus=[]
    
    for j in xrange(Blen):
        #print B.transpose()
        #print model.labels_[j]
        if model.labels_[j]==i:
            clus.append(B[:,j])
        #print clus
    
    clusresult.append(clus)
    #print clusresult[i]
    del clus
   
#print len(clusresult)
#print clusresult[13]

#.......................................................................
#lsh python
# from lshash import LSHash
# lsh = LSHash(4, 3)
# newarrt=new_document_matric.transpose()
# lenth=len(newarrt)
# CC=model.cluster_centers_
# lenthr2=len(CC)
# for i in xrange(lenthr2):
#     lsh.index(CC[i])

# newcomparearrt=new_compare.transpose()
# lenth1=len(newcomparearrt)
#num=0
#...................................................................
#nearpy lsh searh
newarrt=new_document_matric.transpose()
lenth=len(newarrt)
CC=model.cluster_centers_
DIM=3
lenth1=len(CC)
from nearpy.filters import NearestFilter, UniqueFilter
rbp = RandomBinaryProjections('rbp1', 10)
engine = Engine(DIM, lshashes=[rbp], distance=CosineDistance(),vector_filters = [NearestFilter(1)])
#printengine
for i in xrange(lenth1):
    engine.store_vector(CC[i], i)

newcomparearrt=new_compare.transpose()
lenth2=len(newcomparearrt)
#....................................................................
#print newcomparearrt[0]
#print lsh.query(newcomparearrt[0],1)
#timee=0
# for j in xrange(lenth1):
#     k1=0
#     starttime=datetime.datetime.now()
#     lshtruple=lsh.query(newcomparearrt[j],1)
#     endtime=datetime.datetime.now()
#     timee=timee+(endtime-starttime).seconds
#     # if lshtruple:
#     #     print lshtruple[0]
#     for f in xrange(lenthr2):
#         #print CC[f]
#         if lshtruple:
#             if (tuple(CC[f]).__eq__(lshtruple[0][0])):
#                 k1=f
#     f=0
    #print k1
    # length3=len(clusresult[k1])
    # temp=clusresult[k1]
    # lsh1=LSHash(6,3)
    # #print temp
    # ff=0
    # for ff in xrange(length3):      
    #     lsh1.index(temp[ff])
    # starttime1=datetime.datetime.now()
    # if lsh1.query(newcomparearrt[j],1):
    #     num=num+1
    # endtime1=datetime.datetime.now()
    # timee=timee+(endtime1-starttime1).seconds
    # del lsh1
    #print '\n\r'
kkkk=lenth2/12
def worker(A,start):
    # starttime=datetime.datetime.now()
    # endtime=datetime.datetime.now()
    # timee=endtime-starttime
    timee=0
    num=0
    for j in xrange(kkkk):
        k1=0
        #for circ in range(1000):
       # starttime=datetime.datetime.now()
        #lshtruple=lsh.query(newcomparearrt[j+start*kkkk],1)
        #print type(engine)
        lshtruple=engine.neighbours(newcomparearrt[j+start*kkkk])
        #print lshtruple
       # endtime=datetime.datetime.now()
       # timee=timee+(endtime-starttime).seconds
        # if lshtruple:
        #     print lshtruple[0]
        
        for f in xrange(len(CC)):
            #print CC[f]
            if lshtruple:
                if (tuple(CC[f]).__eq__(lshtruple[0][0])):
                    k1=f
                    break
        
        #print k1
        length3=len(clusresult[k1])
        temp=clusresult[k1]
        #.....................................................................................
        # lsh1=LSHash(6,3)
        # #print temp
        # ff=0
        # for ff in xrange(length3):      
        #     lsh1.index(temp[ff])
        # starttime1=datetime.datetime.now()
        # if lsh1.query(newcomparearrt[j],1):
        #     num=num+1
        # endtime1=datetime.datetime.now()
        # timee=timee+(endtime1-starttime1).seconds
        # del lsh1
        #.....................................................................................
        #nearpy
        rbp1 = RandomBinaryProjections('rbp2', 10)
        DIM1=3
        engine1 = Engine(DIM1, lshashes=[rbp1], distance=CosineDistance(),vector_filters = [NearestFilter(1)])
        for ff in xrange(length3):
            engine1.store_vector(temp[ff], ff)
        if engine1.candidate_count(newcomparearrt[j]):
            num=num+1
        #print num
        #del engine
        results = engine1.neighbours(newcomparearrt[j])
      #  print results
        del engine1

        #...........................................................................
    A.append(num)    
   # print '',start,':',num
    #print timee
    #return num
        
totalnum=0
threads = []
aa=[[] for x in range(12)]
for i in range(12):
    A=aa[i]
    t = threading.Thread(target = worker,args=(A,i))
    threads.append(t)  
    t.start()

for i in range(12):
    threads[i].join()

for ttt in range(12):
    if aa[ttt]:
        totalnum=totalnum+aa[ttt][0]

    
#print totalnum
#print '\n\r'
#print len(newcomparearrt)
#print len(B.transpose())#
#print num
    


    #houmiandeidaosuoyinde1shidijihangjidilei
    #zaidao1julei1limian1zhao1



# print (len(document_matric_U[1]))
# print (len(document_matric_V))
# print document_matric_U
# print document_matric_V
#new_document_matric=f_combine_U_S_V(document_matric_U,document_matric_S,document_matric_V)
#print new_document_matric
#print (sorted(new_document_matric[1],reverse=True))
#new_document=f_matric_to_document(new_document_matric,word_vector)
#f_save_file(trace_save,new_document)
#print ("the new document has been saved in %s"%trace_save)
