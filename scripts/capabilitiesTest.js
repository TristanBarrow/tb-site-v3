const prompt = require('prompt-sync')();
const YAML = require('yaml');
const fs = require('fs');
const path = require('path');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

const capPath = path.join(__dirname, '..', 'docs', 'capabilities.yaml');

const cap = fs.readFileSync(capPath);

const capYaml = YAML.parse(cap.toString());

const letters = {
    a: 12,
    b: 8,
    c: 10,
    d: 8,
    e: 4,
};


Object.keys(letters).forEach((key) => {
    const value = letters[key];
    for (let i = 1; i <= value; i++) {
        const q = `${capYaml[key + i]}:
1. ${capYaml[key + i + '_1']}
2. ${capYaml[key + i + '_2']}
3. ${capYaml[key + i + '_3']}
4. ${capYaml[key + i + '_4']}
`;
       const ans = prompt(q);
       if (ans === 'quit') break;
       console.log('your answer: ', ans);
    } 
});
