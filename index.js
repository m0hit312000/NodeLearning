var rect = require('./rectangle');

function solveReact(l,b)
{
    console.log("Solving for rectangle with l = " + l + " and b = " + b);
    if(l <= 0||b <= 0)
    {
        console.log("Rectangle dimensions should be greater than 0 l = " + l + " and b = " + b );
    }
    else
    {
        console.log("The area of the rectangle is" + rect.area(l,b));
        console.log("The perimeter of the rectangle is" + rect.perimeter(l,b));
    }
}
solveReact(2,4);
solveReact(5,10);
solveReact(3,9);
solveReact(22,30);