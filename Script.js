var x1 = 43;
var y1 = 123;
var x2 = prompt( "Enter your number for x2", "32" );
var y2 = prompt( "Enter your number for y2", "99")
var result = Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2));
alert ( "The distance between points A(43,123) and B(" + x2 + "," + y2 + ") is " + result);
