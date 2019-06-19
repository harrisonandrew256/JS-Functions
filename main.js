
const numberGame=(range,rounds)=>{
var p= Math.floor(Math.random()*range)+1;
var z=p%2;
if (z==0)
    alert("The number is Even");
else 
    alert("The number is Odd");
for (count=1;count<=;rounds;count++)
{
    let num=prompt("please enter the number:");
    if (num>p){
        alert("you number is higher.Try again");
    }
    if (num<p){
        alert("you number is lower.Try again");

 }
   if  (num==p){
        alert("YOU WIN");
              break;
    }
   if  (count==rounds) {
        alert("YOU LOSE");
    }
}
}
numberGame(100,10);




