// 1、初始化一个数组
const array = Array(6).fill(''); // ['', '', '', '', '', '']
console.log(array);

// 2、过滤错误值
const array2 = [1, 0, undefined, 6, 7, '', false];
console.log(array2.filter(Boolean));

// 3、清空数组
let array3 = ["A", "B", "C", "D", "E", "F"]
array3.length = 0
console.log(array3)  // []

// 4、将数组元素转换为数字

const array4 = ['12', '1', '3.1415', '-10.01'];
console.log(array4.map(Number));  // [12, 1, 3.1415, -10.01]

// 5、缩短console.log()
// const c = console.log.bind(document);
// c(222);
// c("hello world");

// 6、获取数组中的最后一项
const array6 = [1, 2, 3, 4, 5];
array6.slice(-1);
console.log(array6);