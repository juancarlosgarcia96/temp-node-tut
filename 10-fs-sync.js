const {readFileSync, writeFileSync} = require('fs');
console.log('start');

const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');


writeFileSync('./content/result-sync.txt',
`HERE is the result ${first}, ${second}`,
    {flag:'a'}
);
console.log('done with this task');
console.log('starting the next one');
//flag: 'a' para añadir al texto en el final