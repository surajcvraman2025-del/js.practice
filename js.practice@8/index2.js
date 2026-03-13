let PersonA_Profile = {

Name: "surajthakur" ,
Trade: "Information-technalogy",
Roll_no: 16,
Programing_Language: "linux , java_script , Html-css , github",

}

function Log_Data()
{
  Obj_key = Object.keys(PersonA_Profile);
   for (let i = 0 ; i < Obj_key.length ; i ++ ){

    console.log(PersonA_Profile[Obj_key[i]])

   }

}
Log_Data();

let Age = 19;

let Big_country = [
  "india",
   "pakistan",
   "china",
   "indoneasia",
   "bangladesh"
]
 for( let i = 0  ; i < Big_country.length ; i++){

  console.log(Big_country[i])
 
 };