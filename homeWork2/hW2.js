// JavaScript source code
/*Create a function that takes 3 arguments and returns the sum of the three arguments.

Create a function named colorCar that receives a color, and prints out, "a red car" for example. (Hint: put it in your file and run it like before.)

Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints "a blue motorbike" for example when called as vehicleType("blue", 2)

Can you write the following without the if statement, but with just as a single line with console.log(...);?

if (3 == 3) {
    console.log("true")
} else {
    console.log("false")
}
Create a function called vehicle, like before, but takes another parameter called age, so that

vehicle("blue", 1, 2) prints "a blue used car".
vehicle("blue", 1, 1) prints "a blue new car".
Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.

How do you get the third element from that list?

Change the function vehicle to use the list of question 6. So that vehicle("green", 3, 1) prints "a green new caravan".

Use the list of vehicles to write an advertisement. So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)

What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 9?

Write some code to test two arrays for equality using == and ===. Test the following:

    var x = [1,2,3];
    var y = [1,2,3];
    var z = y;
What do you think will happen with x == y, x === y and z == y and z == x? Prove it*/


function myY(x, y, z) {
    return x + y + z;
}
console.log(myY(1, 2, 3));

// JavaScript source code 1
var color = "blue";
function vehicleType(color, vehicle) {
    var answer = "";
    if (vehicle === 1) {
        answer = color + " car";
    }
    else if (vehicle === 2) {
        answer = color + " motobike"
    }
    console.log(answer);
}

vehicleType(color, 1);
vehicleType(color, 2);

// JavaScript source code 2
function colorCar(x) {
    return x + " car";
}
console.log(colorCar("red"));


cosole.log(3 == 3);

var color = "blue";
function vehicle(color, age, kOfV) {
    var answer = "a" +color + "";
    if (age === 1) {
        answer += " new";
    }
    else if (age === 2) {
        answer += " used";
    }
    if (kOfV === 1) {
        answer += " car";
    }
    else if (kOfV === 2) {
        answer += " motobike";
    }
    else if (kOfV === 3) {
        answer += " caravan"
    }
    console.log(answer);
}
vehicle(color, 1, 1);


var color = "green";
function vehicle(color, age, kOfV) {
    var answer = "a" + color + "";
    if (age === 1) {
        answer += " new";
    }
    else if (age === 2) {
        answer += " used";
    }
    if (kOfV === 1) {
        answer += " car";
    }
    else if (kOfV === 2) {
        answer += " motobike";
    }
    else if (kOfV === 3) {
        answer += " caravan"
    }
    console.log(answer);
}
vehicle(color, 1, 1);



var vehiclE = ["car", " motobike", " caravan", "bike"];
vehiclE[2];


var k = ["cars", "motobikes", "caravans", "bikes"];
function kOfv1(k) {
    var text = "Amazing Joe's Garage, we service " + "";
    for (i = 0; i < k.length; i++) {
        
        if (i === 0) {
            text += k[0] ;
        }
        else if (i > 0 && i < k.length - 1) {
            text += ", " + k[i];
        }
        if (i === k.length - 1) {
           text += " and " + k[k.length - 1];
        }
        
    }
    console.log(text);
}
kOfv1(k);



var k = ["cars", "motobikes", "caravans", "bikes", "trucks"];
kOfv1(k);

var x = [1, 2, 3];
var y = [1, 2, 3];
var z = y;

console.log(x === y);
console.log(x === z);
console.log(z === y);

