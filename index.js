const rectangle = require('./rectangle');
var rect = require('./rectangle');

function solveReact(l,b)
{
    console.log("Solving for rectangle with l = " + l + " and b = " + b);
    rect(l, b, (err, rectangle) => {
        if(err){
            console.log("Error: ",err.message);
        }
        else{
            console.log("The area of the rectangle of dimension l = " + l + " and b = " + b + " is " + rectangle.area());
            console.log("The perimeter of the rectangle of dimension l = " + l + " and b = " + b + " is " + rectangle.perimeter());
        }
    });
    console.log("This statement is after the call to rect");
}
solveReact(2,4);
solveReact(5,10);
solveReact(3,9);
solveReact(22,30);