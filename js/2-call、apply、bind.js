/**
 * call() 方法的作用：可以调用一个函数，与此同时，它还可以改变这个函数内部的 this 指向。
 * call() 方法的另一个应用：可以实现继承。之所以能实现继承，其实是利用了上面的作用。
 * fn1.call(想要将this指向哪里, 函数实参1, 函数实参2);
 */

const person = {
  nickName: "Claire",
  age: 24,
};
function fn1() {
  console.log(this);
  console.log(this.nickName);
}
fn1.call(this); // this的指向并没有被改变，此时相当于 fn1();

// 通过 call() 改变 this 指向
function fn2(a, b) {
  console.log(this);
  console.log(this.nickName);
  console.log(a + b);
}

fn1.call(person, 2, 4); // 先将 this 指向 obj1，然后执行 fn1() 函数

// 通过 call() 实现继承
// 给 Father 增加 name 和 age 属性
function Father(myName, myAge) {
  this.name = myName;
  this.age = myAge;
}

function Son(myName, myAge) {
  // 【下面这一行，重要代码】
  // 通过这一步，将 father 里面的 this 修改为 Son 里面的 this；另外，给 Son 加上相应的参数，让 Son 自动拥有 Father 里的属性。最终实现继承
  Father.call(this, myName, myAge);
}

const son1 = new Son("Claire", 24);
console.log(JSON.stringify(son1));

console.log("------------\n------------");
/**
 * apply() 方法的作用：可以调用一个函数，与此同时，它还可以改变这个函数内部的 this 指向。这一点，和 call()类似。
 * fn1.apply(想要将this指向哪里, [函数实参1, 函数实参2]);
 */

// 求数组中多个元素的最大值
const arr1 = [3, 7, 10, 8];

// 下面这一行代码的目的，无需改变 this 指向，所以：第一个参数填 null，或者填 Math，或者填 this 都可以。严格模式中，不让填null。
const maxValue = Math.max.apply(Math, arr1); // 求数组 arr1 中元素的最大值
console.log(maxValue);

const minValue = Math.min.apply(Math, arr1); // 求数组 arr1 中元素的最小值
console.log(minValue);

console.log("------------\n------------");
/**
 * bind() 方法不会调用函数，但是可以改变函数内部的 this 指向。
 * 新函数 = fn1.bind(想要将this指向哪里, 函数实参1, 函数实参2);
 */