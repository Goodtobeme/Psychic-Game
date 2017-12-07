
     

        // Here is an variable array of letters
    var options = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"]; 
      console.log(options)

     
     var wins = 0;
     var losses = 0;
     var yourGuessesLeft = 10;
     var computerGuess = options[Math.floor(Math.random()*options.length)];
          

     document.onkeyup = function() {

          
      
        // I need the user to make a choice
         var userguess = String.fromCharCode(event.keyCode).
            toUpperCase();

            4 // Computer to make a choice
        

         var winsLoseyourGuessesLeft = yourGuessesLeft;
              // Capture those choice
           
       console.log("You chose " + userguess + " computer chose " + computerGuess);
           
            // Computer to make a guess  User to make a guess 
              if (userguess== computerGuess) {
                    computerGuess = options[Math.floor(Math.random()*options.length)];
                wins++;
                winsLoseyourGuessesLeft ="win";
                yourGuessesLeft = 10;
            }
             else {
              yourGuessesLeft --;
             winsLoseyourGuessesLeft = yourGuessesLeft;
            
            if (yourGuessesLeft == 0) {
                losses++;
                computerGuess = options[Math.floor(Math.random()*options.length)];
                winsLoseyourGuessesLeft = "lose";
                yourGuessesLeft = 10;
              }
           }
         
                      // alert Please choose letter
                     // Compare these choices, and determine a win, loss, or yourGuessesLeft
            var html = "<p>Guess what letter I'm thinking of</p>" +  "<p>wins: " + wins + "</p>" +
                         "<p>Losses: " + losses + "</p>" +
                         "</p> " + "<p>yourGuessesLeft: " + winsLoseyourGuessesLeft +  
                        "</p>";

                          // Display the result to the user 
                         document.querySelector('#game').innerHTML = html;
                     }
        
       
        