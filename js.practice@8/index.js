 // logical opraters //

 //< && >//

 //1 exmple
let a = true;
let b = true;

function And_oprates()
{
  if (a === true && b === true ){

   console.log(" exmpple-1 ,if (a === true && b === true ) Runs")

  }else{
    console.log("Not run !!!!!")
  }


}
And_oprates();

console.log("---------------------------")

//2 exmple
let c = false;
let d = true;

function And_oprates2()
{
  if (c === true && d === true ){

   console.log(" exmpple-2 ,if (c === true && d === true ) Runs")

  }else{
    console.log(" exmple-2 ,Not run !!!!!")
  }


}
And_oprates2();

console.log("---------------------------")

// exmple 3 with three conditions 

let e = false;
let g = false
let f = false;

function And_oprates3()
{ if (e === false && f === false && g === false){
  console.log("exmple 3 run if (e ==== false && f === false && g === false) ")
  


}else{ "Not run broo !!!!"}


}
And_oprates3();
console.log("---------------------------")
console.log("=========================================================================")

//<||> , OR >// 

let h = false;
let i = false;
 function OR_if()                                       // OR (||) Runs when one condition true not like && ops (both condition be ture);
 {
  if (h === true || i === true){
    console.log("or exm-1 roun ") 
  }else { console.log("OR exm-1 ,Not run broo !!!!")}

  
  }
OR_if();

//------------------------------------------------------------------------------------------------------------------------------------------------------------------//


//Object && array //

let Suraj_profile = { //  <---------------------object    //
  is_10pass: true,
  is_12pass: true,
  Name: "suraj",
  Sure_Name: "",
  Father_Name: "shiv kumar",
  Descrition: [             //<--------------------array //
    {
      is_java_know: true,     //<------------------object //
    },

    "DOING ITI IN IT TRADE"
  ],
  Age: 18

};

console.log(Suraj_profile.is_10pass);
console.log(Suraj_profile.is_12pass);
console.log(Suraj_profile.Descrition [0].is_java_know + "" +" best  luck of you ");

console.log(Suraj_profile.is_10pass + Suraj_profile.is_12pass);

// simple objesct 


let obj = {

Name: "Suraj",
Tread: "ITI",
First_year: true,
Roll_Nub: 16,

}
let Obj_key = Object.keys(obj);         // <------------------object.key()  put object to array 
console.log(obj);
console.log(typeof Obj_key);