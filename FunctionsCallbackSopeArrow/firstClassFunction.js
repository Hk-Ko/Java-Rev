function square(num){
    return num * num 
}

function displaySquare(fn){
    console.log("Square is " + fn(5));
}

displaySquare(square)