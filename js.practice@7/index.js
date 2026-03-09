console.log("hello");

//------------------------------------------------------------------------------------------------------------------------------------------------------------//
             // for loops //
//-----------------------------------------------this for counts 0 to 100 ----------------------------------------------------------------//
 for ( let i = 0 ; i < 101 ; i += 10)
 {
  console.log(i);
 };
 // ----------------------//-------------------------//----------------//-------------------//---------------//----------------------//


 //---------------------------------------------this for console the arrays data useing for loops and use . length for auto undate  -------------------------------//
 // [for use with console somethings]
   // first create a array and intailaze with Massage "stiring"
const User_id = 8888888; 
let User_Password = `surajkali`;
let User_ACmode = `admin`;
let Greeting_tag1 = document.getElementById("Greeting_tag");


let Massage = [ `welcome back ` ,         // create array and cuncanete strings and numbers //
     `you id = ${User_id}`,
     "this website hlep to shop B2B",
    `password:${User_Password}`, // add after let make and aad [i.length] in for loop ;//
    `Account-mode:${User_ACmode}`]; // this aad to masseage is admin //


      //--------------///-----------------------///------------------------------///----------------///-------------------------------//
    
     //-------------------------------------------------------------------------------------------------------------------//
     let Greeting = [`welcome back` , `suraj` ,  `this website hlep to shop B2B` ];   // console the Greeting let in Greeting_tag





     for ( let i = 0 ; i  < Greeting.length ; i ++ ){
      console.log(Greeting[i]);
      Greeting_tag1.textContent   += Greeting[i] + " " ;


     };
     //-----------------------------------------------------------------------------------------------------------------------//

     let P1_time = 103;
     let P2_time = 100; 
     
     //< this fuction runtune totel reacetime >//
     function Totel_racetime(){
      let Totel_time = P1_time + P2_time;       //< good for when do opration first and  save in varables than retune vars >// 
      return Totel_time

     };
     Totel_racetime();
     let b = Totel_racetime();
     console.log(b);

     //--------------------------------------//---------------------//------------------------//---------------------------------//