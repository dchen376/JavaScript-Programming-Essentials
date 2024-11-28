{
    // Declare variables inside the block
    var blockVar = "I'm a var variable";
    let blockLet = "I'm a let variable";
    const blockConst = "I'm a const variable";

    // Reassign the variables inside the block
    blockVar = "Reassigned var variable";
    blockLet = "Reassigned let variable";
    // Uncommenting the next line will throw an error because `const` cannot be reassigned
    // blockConst = "Reassigned const variable"; 

    // Log the values inside the block
    console.log(blockVar);    // "Reassigned var variable"
    console.log(blockLet);    // "Reassigned let variable"
    console.log(blockConst);  // "I'm a const variable" (unchanged)
}

// Trying to access the variables outside the block
console.log(blockVar);     // "Reassigned var variable" (accessible because `var` is function-scoped)
console.log(blockLet);     // ReferenceError (because `let` is block-scoped)
console.log(blockConst);   // ReferenceError (because `const` is block-scoped)



// Global scope
var globalVar = "I'm a global variable"; // function scoped
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}


// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"

//Block Scope
console.log(blockVar);
console.log(blockLet);


function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
    }
    show();
    
    console.log(functionVar); // Throws ReferenceError
    console.log(functionLet); // Throws ReferenceError
    console.log(functionConst); // Throws ReferenceError