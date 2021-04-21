
//Function with no argument and no return type
function add() {
    var a=30;
    var b=10;
    console.log("Addition is (Function with no argument and no return type) "+ (a+b));
}

add();
//Function with argument and no return type
function add1(x:number, y:number) {
    
    console.log("Addition is (Function with argument and no return type) "+ (x+y));
}

add1(20,40);

//Function with argument and with return type
function add2(x:number, y:number):number {
    
    return(x+y);
}

var r=add2(20,40);
console.log("Function with argument and with ReturnType : Addition is "+r);

