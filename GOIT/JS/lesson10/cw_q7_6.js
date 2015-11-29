/**
 This kata is all about adding numbers.
 You will create a function named add. This function will return the sum of all the arguments. Sounds easy, doesn't it??
 Well here's the twist. The inputs will gradually increase with their index as parameter to the function.
 add(3,4,5);
  returns ( 3 * 1 ) + ( 4 * 2 ) + ( 5 * 3 ) = 26
Remember the function will return 0 if no arguments are passed.
    Example
add(); //=> 0
add(1,2,3); //=> 14
add(1,4,-5,5); //=> 14
 */

function add (n) {
    var sum = 0, arr = [].slice.call(arguments);
    for (var  i = 0; i < arr.length; i++) {
        sum += arr[i] * (i + 1);
    }
    return sum;
}

console.log(add(1,2,3));