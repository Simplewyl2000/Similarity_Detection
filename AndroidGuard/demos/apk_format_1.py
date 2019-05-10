#!/usr/bin/env python

import sys

PATH_INSTALL = "./"
sys.path.append( PATH_INSTALL )

from androguard.core.bytecodes import dvm, apk 

TEST = "../../test.apk"

a = apk.APK( TEST )
#a.show()
b=a.get_dex()

#j = dvm.DalvikVMFormat( a.get_dex() )

# SHOW CLASS (verbose)
#j.show()
