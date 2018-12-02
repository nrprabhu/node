const path = require('path');
const os = require('os');

function sayHello(name) {
    console.log('Hello ' + name);
}

sayHello('Mosh');
//console.log(global);
console.log(__filename);
console.log(__dirname);
console.log(require);
console.log(module);
var pathObj=path.parse(__filename);
console.log(pathObj);
console.log(pathObj.base);
console.log(os.platform()+ ' Rel ' +os.release());
console.log(os.userInfo());