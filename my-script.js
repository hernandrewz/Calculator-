
var a = [];
var b = [];
var o = []; 
var e = [];
var answr = 0;

//display 
document.getElementById('screen').innerHTML = 0




//Event listner A
function touchA() { 
    document.getElementById("calcKey1").addEventListener( "click", function(){
    if ( o.length < 1) {
        a.push(1);
    console.log(a);
}})

document.getElementById("calcKey2").addEventListener( "click", function(){
    if ( o.length < 1) {
    a.push(2);
    console.log(a);
}})

document.getElementById("calcKey3").addEventListener( "click", function(){
    if ( o.length < 1) {
    a.push(3);
    console.log(a);
}})

document.getElementById("calcKey4").addEventListener( "click", function(){
    if ( o.length < 1) {
    a.push(4);
    console.log(a);
}})

document.getElementById("calcKey5").addEventListener( "click", function(){
    if ( o.length < 1) {
    a.push(5);
    console.log(a);
}})

document.getElementById("calcKey6").addEventListener( "click", function(){
    if ( o.length < 1) {
    a.push(6);
    console.log(a);
}})

document.getElementById("calcKey7").addEventListener( "click", function(){
    if ( o.length < 1) {
    a.push(7);
    console.log(a);
}})

document.getElementById("calcKey8").addEventListener( "click", function(){
    if ( o.length < 1) {
    a.push(8);
    console.log(a);
}})

document.getElementById("calcKey9").addEventListener( "click", function(){
    if ( o.length < 1) {
    a.push(9);
    console.log(a);
}})

document.getElementById("calcKey0").addEventListener( "click", function(){
    if ( o.length < 1) {
    a.push(0);
    console.log(a);
}})

}



//touchA();

// event listner o 

function touchO() { 


//    a.push(1);
//})
document.getElementById("calcKeyPlus").addEventListener( "click", function(){
    if (a.length >= 1) {
    o.push('+');
    console.log(o);
}})
document.getElementById("calcKeyMinus").addEventListener( "click", function(){
    if (a.length >= 1)  {
    o.push('-');
  console.log(o);
}})
document.getElementById("calcKeyTimes").addEventListener( "click", function(){
    if (a.length >= 1) {
    o.push('*');
console.log(o);
}})
document.getElementById("calcKeyDivide").addEventListener( "click", function(){
    if (a.length >= 1)  { o.push('/');
console.log(o);
}})
}

//Event Listener B
function touchB() { 
     
    document.getElementById("calcKey1").addEventListener( "click", function(){
        if (o.length >= 1){
        b.push(1);
        console.log(b);
    }})
    
    document.getElementById("calcKey2").addEventListener( "click", function(){
        if (o.length >= 1) {
        b.push(2);
        console.log(b);
    }})
    
    document.getElementById("calcKey3").addEventListener( "click", function(){
        if (o.length >= 1) {
        b.push(3);
        console.log(b);
    }})
    
    document.getElementById("calcKey4").addEventListener( "click", function(){
        if (o.length >= 1) {
        b.push(4);
        console.log(b);
    }})
    document.getElementById("calcKey5").addEventListener( "click", function(){
        if (o.length >= 1) {
        b.push(5);
        console.log(b);
    }})
    
    document.getElementById("calcKey6").addEventListener( "click", function(){
        if (o.length >= 1) {
        b.push(6);
        console.log(b);
    }})
    document.getElementById("calcKey7").addEventListener( "click", function(){
        if (o.length >= 1) {
        b.push(7);
        console.log(b);
    }})

    document.getElementById("calcKey8").addEventListener( "click", function(){
        if (o.length >= 1) {
        b.push(8);
        console.log(b);
    }})
    
    document.getElementById("calcKey9").addEventListener( "click", function(){
        if (o.length >= 1) {
        b.push(9);
        console.log(b);
    }})

    document.getElementById("calcKey0").addEventListener( "click", function(){
        if (o.length >= 1) {
        b.push(0);
        console.log(b);
    }})
    } 

function touchE() { 
    document.getElementById('calcKeyEqual').addEventListener( "click", function(){
   e.push("=");
   if ( b.length > 0 && o == "+") { answr += ((parseInt(a.join())) + (parseInt(b.join()))); 
    console.log(answr); 
}
   if ( b.length > 0 && o == "-") { answr += ((parseInt(a.join())) - (parseInt(b.join())))
    console.log(answr)
}


   if ( b.length > 0 && o == "*") {answr += ((parseInt(a.join())) * (parseInt(b.join())))
    console.log(answr)
}

   if ( b.length > 0 && o == "/") { answr += ((parseInt(a.join())) / (parseInt(b.join())))
   console.log(answr)
}})
}



touchA();
touchO();
touchB();
touchE();

//})
//document.getElementById().addEventListener( "click", function(){
  //  a.push(1);
//})
//document.getElementById().addEventListener( "click", function(){
  //  a.push(1);
//})
//document.getElementById().addEventListener( "click", function(){
  //  a.push(1);
//})
//document.getElementById().addEventListener( "click", function(){
  //  a.push(1);
//})







//function operate {
 
//}

//function multiply {

//}

//function divide { 

//}

//function add {

//}

//function subtract {

//}