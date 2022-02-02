rm -rf node_modules dist
npm prune
npm uninstall --save-dev angular-cli
npm install --save-dev @angular/cli@latest
npm install
ng build
( speaker-test -t sine -f 1000 )& pid=$! ; sleep 0.5s ; kill -9 $pid

