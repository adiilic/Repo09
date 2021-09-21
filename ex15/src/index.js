// Only change code below this line
function myDoWhile() {
    var myNumbers = "";
    i = 0

    do {
        myNumbers = myNumbers + i + ", ";
        i++;

    } while (i < 9);
    myNumbers = myNumbers + i;

    return myNumbers;
}
myDoWhile();
console.log(myDoWhile());

// Only change code above this line
module.exports = myDoWhile;