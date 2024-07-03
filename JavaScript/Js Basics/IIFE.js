// Immediately Invoked Function Expressions (IIFE)
// To remove the global scope pollution we use IFFE


(function chai(){         // named IIFE
    console.log(`DB CONNECTED`);
})();


( (name) => {                         // Arrow function(Unamed IFFE)
    console.log(`DB CONNECTED 2 ${name}`);
} )('Prateek');       // semicolon is given to stop the function otherwise it will show error


