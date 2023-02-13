function fn(a) {
  console.log(1, a);
  var a = 666;
  console.log(2, a);
  function a() {}
  console.log(3, a);
  var b = function () {};
  console.log(b);
  function c() {}
}

fn(222);
