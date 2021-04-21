var temp=function(){
    console.log("Anonymous function with no argument and no return type");
}
var temp1=function(a:number){
    console.log("Anonymous function with argument and no return type"+a);
}
var temp2=function():string{
    return"Anonymous function with no argument and with return type ";
}
var temp3=function(b:number):string{
    return "Anonymous function with no argument and with return type "+b;
}

temp();
temp1(10);
console.log(temp2());
console.log(temp3(17));