function changeNum(num) {
    num = num * 10;
}

function changeKey(obj) {
    obj.key = "changed";
}

function changeObj(obj) {
    obj = { key: "changed" };
}

const num = 10;
changeNum(num); // primitive value ==> passed by value (copied)
console.log(num); // 10

const obj1 = { key: "unchanged" };
changeKey(obj1); // obj1 ref. passed by value. func accessing obj1 
console.log(obj1); // changed

const obj2 = { key: "unchanged" };
changeObj(obj2); // obj2 ref. passed by value ==> ref. copied in func
                 // in func, ref (copied) is changed ==> obj2 remains unchanged.
console.log(obj2); // unchanged 

/*
TLDR:
Mutating an object inside the function changes the original.
Reassigning the object inside the function does not affect the original.
*/

