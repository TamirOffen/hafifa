
// 5 1 2 4 3

// This function use setTimeout to simulate a long running task
function logAfterMs(message, ms) {
  setTimeout(() => console.log(message), ms);
}
  
logAfterMs("1", 0);
logAfterMs("2", 1);
logAfterMs("3", 10);
logAfterMs("4", 5);
console.log("5");
  