#!/bin/bash

echo "release"
fis3 server stop
fis3 server clean

# 端口号自己指定即可
fis3 server start -p 29999

# develop 开发
# intranet 内网
# online 外网
# 使用时更换release 后的第一个参数为对应参数即可
# 同理打包的时候  fis3 release develop -d xxxxxxx/  第一个参数改为对应的参数即可

fis3 release develop -wL  
