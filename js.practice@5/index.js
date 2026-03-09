// function startlet() {
  let First_card = Random_card();                                             //first var 
let Second_card = Random_card();                                         // second var
let All_card = [First_card, Second_card];

let Sum = First_card + Second_card;                                  // plus both var == 11 
let Card_val2 = document.getElementById("Cards_value");             // here take cards_value how show total card of player ;
//Card_val2.textContent = `Cards` + Sum


let Massage = "";                                                  //create anothe var for greeting or masseges 
 
Massage = `do you wana draw a new card?`;                          // put massege to var 

let Black_Card = undefined;                                       // var for the black card 

let isAlive = undefined;                                          // var for the gamer status Alive 

let  element_h2 = document.getElementById("Wel");                // for massage show on web 
  
//----------------------new fuction for the random card those retune 5 -----------------------------------------------------------------------//
 
function Random_card(){
   for (let i = 0 ; i < 1 ; i ++) {
    let aj = Math.floor(Math.random() * 13 + 1);
    console.log(aj);
  if (aj === 1 ) {
   return 10
  }else if ( aj > 13){
    return 102
  }else {
    return aj ;
   }
}
}




                                          //when you call function on let for value so auto var call functions 



// new  function that call render_game -------------------------------------------------------------------------------------------------------
 function Start_game(){
  startlet();
  Render_game();
   for ( let i = 0 ; i < All_card.length ; i ++ ){
    Card_val2.textContent += `Cards`+ ":" + All_card[i] + " " ;

   }

 }

// END Function ;------------------------------------------------------------------------------------------------------------------------------




  

function Render_game () {

if (Sum <= 10 ) {         //if ---> Sum small to 10 or equals to 10 user isAlive status ----> false   / 19 <= 10 = false /
 isAlive = false; 
 element_h2.textContent = "you lose";
 console.log(isAlive)

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

// if (isAlive === false) {                   // this well we lear next chapter 
//   const element_h2 = document.getElementById("Wel");
//   element_h2.textContent = "you lose";
// }if else () { 
  
//   const element_h2 = document.getElementById("Wel");
//   element_h2.textContent = "welcome";
// }
//-------------------------------------------------------------------------------------------------------//
let Sum_el = document.getElementById("sum");   // sum is a element thsi show added card first_card + second_card and put to Sum_el; NEW CARD ELEMENT ,

function New_cards()
{
  let Add_Sum = Random_card(); 
  Sum = Sum + Add_Sum;
   
 All_card.push(Add_Sum);
  //Card_val2.textContent = All_card
  Sum_el.textContent = Sum;
  Start_game();



}

 