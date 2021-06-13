
### ts学习note
1. 初始化项目
npm init -y [前提是要安装过npm和node环境]
2. typescript tslint @types/node
3. 运行命令 生成tsconfig.json配置文件
```
./node_modules/.bin/tsc --init
```
4. 手动创建并配置tslint.json, 进行ts格式化验证, 也可以运行 ./node_modules/.bin/tslint --init 命令

5. build:watch 将所有的ts编译成为js文件，然后打开新的terminal窗口，cd到src下的指定文件目录，然后使用nodemon fileName.js文件即可







