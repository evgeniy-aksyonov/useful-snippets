let a = new Set([1,2,3]);
let b = new Set([1,3,2]);

function eqSet(aSet, bSet) {
    if (aSet.size !== bSet.size) return false;
    for (let a of aSet) if (!bSet.has(a)) return false;
    return true;
}

console.log(eqSet(a, b)); // true