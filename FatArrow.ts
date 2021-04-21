//Function definition  
var disp=()=>{
    console.log("Fat arrpw or lambda function without any argument");
}

disp();

var disp1=(a:number)=>{
    console.log("Fat arrpw or lambda function with argument"+a);
}
disp1(10);

var disp2=(a:number):number=>{
     return a;
}
console.log("Fat arrpw or lambda function with argument and with return type "+disp2(14));