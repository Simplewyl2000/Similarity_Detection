#!/usr/bin/env python
# coding=utf-8

import sys
import os
import datetime


#import graph
sys.path.append("../")

from androguard.core.bytecodes import dvm,apk
from androguard.core.analysis import analysis


#TEST = '../examples/android/TestsAndroguard/bin/classes.dex'
TEST = "../../test.apk"
def getdex(path):
    a = apk.APK( TEST )
    b=a.get_dex()
    return b

def eachFile(filepath):
    child=[]
    pathDir =  os.listdir(filepath)
    for allDir in pathDir:
        child.append(os.path.join('%s%s' % (filepath, allDir)))
    #print child
    return child 

def eachfile(m,dirname):
    ii=0
    for root,dirs,files in os.walk(dirname):
        for f in files:
            if f.endswith('.apk'):
                ii=ii+1
                if(ii>=m):
                    yield os.path.join(root,f)
# class Edge:
#     def __init__(self, source, destine):
#         #self.weight = weget_nextight
#         self.source = souget_nextrce
#         self.destine = deget_nextstine
#get_next
# class Graph:get_next
#     def add_edge(self, edget_nextge):
#         self.vertices.addget_next(edge.source)
#         self.vertices.addget_next(edge.destine)
#         if edge.source noget_nextt in self.adjacents.keys():
#             self.adjacentget_nexts[edge.source] = set([])
#         self.adjacents[edget_nextge.source].add(edge)
#         self.edges.add(edget_nextge)
#         # print("add edge from {} to {}, weight {}".format(edge.source, edge.destine, edge.weight))
#get_next
#     def get_adjacents(self, vertex):
#         # print("get the adjacent vertices of vertex {}".format(vertex))
#         if vertex not in self.adjacents.keys():
#             return set([])
#         return self.adjacents[vertex]

#     def vertex_number(self):
#         return len(self.vertices)

#     def edge_number(self):
  #      return len(self.edges)


def get_graph(gg):
    list_edge={}
    for i in gg.get_basic_blocks().get():
        for j in i.get_next():
            list_edge.setdefault(i,[]).append(j[2])
    return list_edge

def find_all_paths(graph, start, end, path=[]):
    path = path + [start]
    if start == end:
        return [path]
    if not graph.has_key(start):
        return []
    paths = []
    for node in graph[start]:
        if node not in path:
            newpaths = find_all_paths(graph, node, end, path)
            for newpath in newpaths:
                paths.append(newpath)
    return paths     

def has_cycle(g):
    where_from = dict()
    visited = set()
    stack = dict()
    cycle = []
    def dfs(n):
        visited.add(n)
        stack[n] = True
        for x in g.get(n,[]):
            if x not in visited:
                where_from[x] = n
                dfs(x)
            elif stack.get(x,False):
                cycle_path = get_path(where_from,x,n)
                if cycle_path:
                    cycle.append(cycle_path+[x])
        stack[n] = False

    for x in g:
        if x not in visited:
            dfs(x)
  #  print cycle
    return cycle

def get_path(where_from,_from,to):
    try:
        path = []
        x = to
        while x != _from:
            path.insert(0,x)
            x = where_from[x]
        path.insert(0,x)
        return path
    except:
        return []


def find_nodes(root,S=None):
   # weight=0
    if S is None:
        S=set()
    S.add(root)
  #  print '\n',root,'\n'
   # raw_input()
    if root.get_next():
       for j in root.get_next():
           # print j
           nextnode=j[2]
           if nextnode in S: 
               continue
          # weight=weight+1
           find_nodes(nextnode,S)  
    return (len(S)-1)

def Sum(root):
    if not root:
        return 0
    else:
        if root.get_next():
            rn=root.get_next()
            return 1+Sum(rn[2])
       # return 1+Sum(rn[2])

        

def find_path(start,end,path=[]):
    path=path+[start]
    if start==end:
        return path
    if not start:
        return None
    for node in start.get_next():
        nextnode=node[2]
        if nextnode not in path:
            newpath=find_path(nextnode,end,path)
            if newpath:
                return newpath
    return None
        
def find_loop(gg,root):
    loop_num=0
    if root.get_next():
        start=root.get_next()
        if root.get_prev():
            end=root.get_prev()
            for j in start:
                for k in end:
                    pathh=find_all_paths(gg,j[2],k[2],path=[])
                    if pathh:
                        loop_num=loop_num+len(pathh)
    return loop_num

def find_loops(gg,i):
    loop_num=0
    cycle=has_cycle(gg)
    for j in cycle:
        if j:
            for k in j:
                if k==i:
                    loop_num=loop_num+1
    return loop_num
        
def getfile(filename):
    filee = open(filename,'a')
    return filee


#def get_apk(patth)
# CFG
filePath = "../test/"
ALLTEST=eachfile(1, filePath)
mm=0
for iii in ALLTEST:
    mm=mm+1
    file = None
    try:
        print (iii)
       # starttime = datetime.datetime.now()
        TEST=iii
        #starttime = datetime.datetime.now()
        b=getdex(iii)
        
        d = dvm.DalvikVMFormat(b)
        x = analysis.VMAnalysis(d)
        
        #print os.path.basename(iii).split('.',1)[0]

        filename = '../output/'+os.path.basename(iii).split('.',1)[0]+'.txt'
       # print 'im done'
        file =open(filename,'w')
        for method in d.get_methods():
            g = x.get_method(method)
            if method.get_code() == None:
                continue

            # print method.get_class_name(), method.get_name(), method.get_descriptor()

            idx = 0
            graphh=get_graph(g)
            has_cycle(graphh)
            #print graphh
            properity=[]
            index=0
            #file.write("qqqqq")
            #file.write('%s\n' % method.get_class_name())
            #file.write('%s\n' % method.get_name())
            for i in g.get_basic_blocks().get():
            # print i.get_next(),'\n'
                index=index+1
                node_pro=[]
                child_num=0
                father_num=0
                node_pro.append(index)
                w=find_nodes(i)
                #ww=Sum(i)
                loop=find_loops(graphh,i)
                node_pro.append(w)
                node_pro.append(loop)
                #child_num=get_length(i.get_next)
                #father_num=get_length(i.get_prev)
                for j in i.get_next():
                # print j,'\n'
                    child_num=child_num+1
                #print '.'*80
                for j in i.get_prev():
                #  print j, '\n'
                    father_num=father_num+1
                #while (i.get_next()):
                #    child_num=child_num+1
                #while (i.get_prev()):
                #    father_num=father_num+1
                node_pro.append(child_num)
                node_pro.append(father_num)

            # print "\t %s %x %x" % (i.name, i.start, i.end), '[ NEXT = ', ', '.join( "%x-%x-%s" % (j[0], j[1], j[2].get_name()) for j in i.get_next() ), ']', '[ PREV = ', ', '.join( j[2].get_name() for j in i.get_prev() ), ']'
                ins_len=0
                for ins in i.get_instructions():
                # print "\t\t %x" % idx, ins.get_name(), ins.get_output()
                    idx += ins.get_length()
                    ins_len=ins_len+1                   
                node_pro.append(ins_len) 
                #print node_pro 
                properity.append(node_pro)
            #print properity
            n1=w1=l1=o1=i1=s1=0
            for j in properity:
                n1=n1+j[0]*j[1]*(j[3]+j[4])
                w1=w1+j[1]
                l1=l1+j[2]*j[1]*(j[3]+j[4])
                o1=o1+j[3]*j[1]*(j[3]+j[4])
                i1=i1+j[4]*j[1]*(j[3]+j[4])
                s1=s1+j[5]*j[1]*(j[3]+j[4])
            if w1!=0:
                n1=int(n1)//int(w1)
                l1=int(l1)//int(w1)
                o1=int(o1)//int(w1)
                i1=int(i1)//int(w1)
                s1=int(s1)//int(w1)
                jjj=[n1,w1,l1,o1,i1,s1]
            
                file.write('%s\n' % jjj)

            #print "\n"
            #print "."*80
       # close(file)
        #os.remove(iii)
        #endtime = datetime.datetime.now()
        #print (endtime - starttime).seconds 
    except Exception as e:
        print (e)
        print ('---',iii)
    finally:
        if file != None:
            file.close()
            
           
