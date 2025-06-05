 function playGame(){
    console.log("playGame function was called");
       
       var die1 = rollDie();
       //console.log("the first die roll is:" + die1);

       var die2 = rollDie();
      // console.log("the second die roll is: " + die2);

       var sum = die1 + die2;
     //  console.log("the sum is: " + sum);

       document.getElementById("die1Result").textContent = "Die 1 is: " + die1;
       document.getElementById("die2Result").textContent = "Die 2 is: " + die2;
       document.getElementById("sumResult").textContent = "The sum is: " + sum;
       let determination = "You win! Wanna play again?" 
       if(sum == 7 || sum == 11){
       document.getElementById("gameResult").textContent = determination;
       console.log (determination);
       }
       else if(die1 == die2 && die1 % 2 == 0){
           document.getElementById("gameResult").textContent = determination;
           console.log("You lost! Try again?");

       }
       else{
           document.getElementById("gameResult").textContent = "You lost! Try again?";

       }
   }
  


   function rollDie(){
       var die = Math.random() * 6;
       return Math.ceil(die);
   }