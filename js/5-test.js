const fs = require('fs');
const buf = fs.readFileSync("/dev/stdin");

let number = prepareData(buf);

let result = func(number);

console.log(result)

function prepareData (buf) {
    let bufArr = buf.toString().trim().split('\n');
    return bufArr[0];
}

function func (number) {
   return number.toString().split('').reverse().reduce((pValue, cValue, currentIndex) => {
        if (currentIndex === 0) {
            return {
                lastAll: 45,
                allValue: (Number(cValue) + 1) * Number(cValue) / 2,
            }
        }
        const cNum = Number(cValue);
        const value = pValue.lastAll * cNum + (cNum) * (cNum - 1) / 2 * 10**currentIndex;

        return {
            lastAll: pValue.lastAll * 10 + 45 * 10**currentIndex,
            allValue: pValue.allValue + value
        };
    }, 0).allValue + number.split('').reduce((pValue, cValue, currentIndex) => {
        if (currentIndex === number.length - 1) {
            return pValue;
        }
        const value = Number(number.slice(currentIndex + 1)) + 1;
        return pValue + Number(cValue) * value;
   }, 0);
}