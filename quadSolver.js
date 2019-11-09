// Quadratic formula 

const quadEquationSolver = function (a, b, c) {
    let squareRoot = Math.sqrt( (b * b) - (4 * a * c) );
    let denominator = 2 * a;
    
    let firstRoot = (-b + squareRoot)/denominator;
    let secondRoot = (-b - squareRoot)/denominator;
    
    console.log("The first root is " + firstRoot);
    console.log("The second root is " + secondRoot);
  };