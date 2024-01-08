const os = require('os');


console.log('hello node js');


let firstArg = process.argv[1];
let secondArg = process.argv[2];
let thirdArg = process.argv[3];

console.log('first argiment', firstArg);
console.log('second argument', secondArg);
console.log('third argument', thirdArg);

// os check 
const local = {
    'Home Directory':os.homedir(),    
    'Operating System': os.type(),
    'Last Reboot': os.uptime(),
    'Network interface': os.networkInterfaces(),
}

const server = {
    type : os.type(),
    architecture: os.arch(),
    uptime: os.uptime()
  };

console.log('local os', local);

console.log('server', server);