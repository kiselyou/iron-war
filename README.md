~~~
npm install -g bower
npm install -g babel-cli
npm run build
pm2 start --interpreter babel-node socket/index.js
pm2 save
~~~