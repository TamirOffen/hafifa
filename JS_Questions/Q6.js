
function once(fn) {
    let alreadyCalled = false;
    return function (...args) {
        if (alreadyCalled) {
            throw new Error('Function already called');
        } else {
            alreadyCalled = true;
            return fn(...args);
        }
    }

}


// const simple_fn = (x) => {return x};
// const simple_fn_once = once(simple_fn);
// console.log(simple_fn_once(10));
// simple_fn_once();

const add = (a, b) => a + b;

const addOnce = once(add);
console.log(addOnce(3, 4)); // 7
try {
    console.log(addOnce(3, 4)); // Error: Function already called
} catch (e) {
    console.log(e);
}
// console.log(addOnce(-2, 8)); // Error: Function already called
