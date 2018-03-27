From node:8
ENV CI true
workdir /app
copy extract/package.json /app
copy extract/bower.json /app
run  npm update fsevents --registry=https://registry.npm.taobao.org \
     &&  npm install fis -g \
     &&  npm install -g fis-parser-node-sass \
     &&  npm install bower -g --registry=https://registry.npm.taobao.org \
     &&  npm rebuild node-sass  \
     &&  npm install --registry=https://registry.npm.taobao.org \
run  bower install --allow-root
copy extract/ /app/
ENV HOST 0.0.0.0
ENV PORT 8000

EXPOSE 8000
	
CMD ["fis3","release"]
