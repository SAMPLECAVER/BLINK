	function guess_number(){
  var secret = 210;
  var guess;
  while(guess != secret){ 
    guess = prompt("Guess my favourite number if you think you know me");
   
    if(guess == secret){
       alert("Took you long enough. Congrats though.");
    }
    else if(guess < secret){
        alert("guess higher");        
    }
    else if(guess > secret){
      alert("guess lower");
    }
    else{
      alert("that's not a number silly");
    }
  }
}

function ng(){
  var secret = "Omar"
  var guess;
  while(guess != secret){ 
    guess = prompt("Who's the best at coding in the class? (Case Sensitive)");
   
    if(guess == secret){
       alert("Yeah, that's right it's meee");
    }
    else if(guess != secret){
      alert("It's not that hard come on");
    }
  }
}


function cg(){
var x = prompt("Pick a year any year");
var y =(x/100)
var z =(y + 1)
    alert("This year is in the" + " " + Math.floor(z) + "th Century")
}

function angle(){
  var x = prompt("Enter an angle belonging to a triangle (Just the number)");
  var y = prompt("Enter the other angle of that same triangle (Just the number)");
    alert(180 - x - y + " " + "degrees is the 3rd angle of your triangle");
}

function hehe(){
  var x = alert("It's not done yetttttt >:(");
}

function ic(){
  var x = alert("ERROR. Duuudeeeee I'm still working on it leave me alone :(");
}

