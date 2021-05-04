const arguments = process.argv.slice(2)


function calculateArea(myRadius){
    let area = Math.pow(myRadius, 2) * Math.PI;
    let areaSig = area.toFixed(2) ;
    console.log(`Total area = ${areaSig}`);
}




calculateArea(arguments[0]*1);