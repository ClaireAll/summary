let profiler = new Profiler();
profiler.start();
// do some actions that might cause memory leaks
for (let i = 0; i < 100000; i++) {
  myArray.push({
    largeData: new Array(1000000).fill("some data"),
    id: i,
  });
}
profiler.end();
let report = profiler.report();
// analyze the report to identify areas where memory usage is high
for (let func of report) {
  if (func.memory > 1000000) {
    console.log(func.name);
  }
}
