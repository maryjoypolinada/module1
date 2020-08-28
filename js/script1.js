function login(){
    let user = document.getElementById("user").value;
    let pwd = document.getElementById("pwd").value;
    if(user === "admin" && pwd === "secret"){
        alert("You have successfully signed in!");
    }
    else{
        alert("Invalid!");
    }
}

function changeColor(){
    window.document.getElementById("outer").style.backgroundColor="red"; //okay lang kahit walang window pwede ring 'this' 
}

function inputData(){
    let textbox = document.getElementsByClassName("input");
    textbox[0].value = "admin";
    textbox[1].value = "secret";
}

function displayData(){
    alert(document.getElementById("sections").value);
    alert(document.getElementById("myData").value);
    alert(document.getElementById("myButton").innerHTML);
    alert(document.getElementById("fruit").value);
} 
//demo differences of var, let, and const

//var
//(1)
// var temp = 5;
// var temp = "dog"; 
// console.log(temp);

//(2)
// var temp = 5;
// var temp = "dog";
// function m1(){
//     temp = true;
//     console.log(temp);
// }
// m1();

//let
//(1)
//produces an error because redeclaration in let is not allowed
// let temp = 5;
// let temp = "dog";
// function m1(){
//     temp = true;
//     console.log(temp);
// }
// console.log(temp);

//(2)
//can be redeclared in this case because "let" was not used again in reassigning to dog
// let temp = 5;
// temp = "dog";
// function m1(){
//     temp = true;
//     console.log(temp);
// }
// console.log(temp);

//(3)
//will produce an error because it cannot be read outside of its own scope
// let temp = 5;
// temp = "dog";
// function m1(){
//     let temp2 = true;
//     console.log(temp);
// }
// console.log(temp2);

//const
//(1)
// const temp = 5;
// const temp = "dog";
// function m1(){
//     temp = true;
//     console.log(temp);
// }
// console.log(temp);

//(2)
// const temp = 5;
// temp = "dog";
// function m1(){
//     temp = true;
//     console.log(temp); 
// }
// console.log(temp);

//(3)
// const temp = 5;
// temp = "dog";
// function m1(){
//     const temp2 = true;
//     console.log(temp);
// }
// console.log(temp2);