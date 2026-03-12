let Player_Obj = {

  Name: "suraj thakur",
  Chips: undefined,
  Player_position: 5


}
let Obj_3 = Object.keys(Player_Obj);
console.log(Obj_3)
                                             
       





let el3 = document.getElementById("money");
  for (let i = 0 ; i < Obj_3.length ; i ++ ){
    
   el3.textContent += Player_Obj[Obj_3[i]] + " "}





let All_card = [];

let Sum = undefined;  
let SumArr = [];                               // plus both var == 11 
let Card_val2 = document.getElementById("Cards_value");             // here take cards_value how show total card of player ;
//Card_val2.textContent = `Cards` + Sum

let Run_value = false;
let Massage = "";                                                  //create anothe var for greeting or masseges 
 
Massage = `do you wana draw a new card?`;                          // put massege to var 

let Black_Card = undefined;                                       // var for the black card 

let isAlive = undefined;                                          // var for the gamer status Alive 

let  element_h2 = document.getElementById("Wel");                // for massage show on web 
  

console.log(`start`)     //
console.log("ALL_card" + All_card)    // undefiend or NaN
console.log("Sum" +  Sum)          // 
console.log("Blac"+ Black_Card)   //
console.log("isAlive" + isAlive)     // 
console.log(`end`)       //
console.log("------------------------------")
//

function Show_card()
    {  
      
      Card_val2.textContent = "CARDS";
      for ( let i = 0 ; i < All_card.length ; i ++ ){
    Card_val2.textContent +=  ":" + All_card[i] + " " ;
    }
   }
//
















//----------------------new fuction for the random card those retune 5 -----------------------------------------------------------------------//
 
function Random_card(){
   for (let i = 0 ; i < 1 ; i ++) {
    let aj = Math.floor(Math.random() * 13 + 1);
    console.log("RANDOM FUNCTION RUNcode 1")
    console.log("code 2 aj var check " + aj)
    
  if (aj < 10 ) {
   return 10
  }else if ( aj === 1){
    return 11
  }else {
    return aj ;
   }
}
Show_card();
}




   //when you call function on let for value so auto var call functions 



// new  function that call render_game -------------------------------------------------------------------------------------------------------
 function Start_game(){
 
  Run_value = true;
  console.log("run value after assing false when startgame funcation" + Run_value)
  let First_card = Random_card(); 
    SumArr.push(First_card);
     let Second_card = Random_card();
     SumArr.push(Second_card);
     All_card = [First_card , Second_card];
     Sum = First_card + Second_card;
     
     console.log("-----------------------------------------------")
      console.log("start game funcation run")
     console.log("info:render funcation give first var values")
     console.log(First_card)
     console.log(Second_card) 
    console.log(All_card)
    console.log(Sum + "code 33 ")
    console.log("end  start game funcation run")
    Show_card();
     Render_game();

 }

// END Function ;------------------------------------------------------------------------------------------------------------------------------




  

function Render_game () {                                      
  console.log("-------------------------------------------")
  console.log("render____funcation run ")                                          //logic area 

if (Sum <= 10 ) {         //if ---> Sum small to 10 or equals to 10 user isAlive status ----> false   / 19 <= 10 = false /
 isAlive = false; 
 element_h2.textContent = "you lose";
 //console.log(isAlive)

}else if (Sum < 21) {     // else if --->  Sum small to 10 console.log __massage var                   /19 < 21 = ture / && console.log == massage 
  element_h2.textContent = Massage;
  console.log(Massage)
}else if(Sum === 21) {     // when sum quale to 21 console.log 'you win ' && black var == ture        /19 === 21 = false /
 Black_Card = true;
  element_h2.textContent = "you win";
console.log("you  win " );         
} else if( Sum > 21 ) {   // else if Sum greate than 21 gamer win && console.log == play next game !! ; / 19 > 21 = false / 
   element_h2.textContent = "play next game !!"
 Black_Card = true; 
  //element_h2.textContent = "you win";
console.log(Black_Card)    } 
//console.log(isAlive); }
}
//-------------------------------------------------------------------------------------------------//





//-------------------------------------------------------------------------------------------------------//
let Sum_el = document.getElementById("sum");   // sum is a element thsi show added card first_card + second_card and put to Sum_el; NEW CARD ELEMENT ,

function New_cards()
{
  //console.log("NEW_cards funcation Run")
  if (Run_value === false )
  {
    let a = "firt start game than take a New card"
    console.log(a)
       
  }else if (Run_value === false );
 
  {   let Add_Sum = Random_card(); 
     All_card.push(Add_Sum);
    console.log(Add_Sum + "code 103");
    Show_card();
  
  Sum = Sum + Add_Sum;                   //Sum not defiende yet 
  console.log("--------------new fucation else if console.log-------code77----------")
   console.log("ADD_sum of NEW cards funcation run" + Add_Sum)
   console.log("SUm opration value " + Sum)
   console.log("----------------new fucation else if console.log----emd-----------")
 ;
  //Card_val2.textContent = All_card
  Sum_el.textContent = Sum;
  }

  console.log(SumArr + "c code 100")
  console.log(All_card + "c code 101")

}

