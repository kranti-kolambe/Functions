//Function definition  
var disp = function () {
    console.log("Fat arrpw or lambda function without any argument");
};
disp();
var disp1 = function (a) {
    console.log("Fat arrpw or lambda function with argument" + a);
};
disp1(10);
var disp2 = function (a) {
    return a;
};
console.log("Fat arrpw or lambda function with argument and with return type " + disp2(14));
