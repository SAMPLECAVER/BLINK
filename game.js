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
var y =(x/100);
var z =(Math.floor(y + 1));
if (z == 12){
    alert("This year is in the" + " " + z + "th Century");
  } else if (z == 13){
    alert("This year is in the" + " " + z + "th Century");
 } else if (z == 11){
   alert("This year is in the" + " " + z + "th Century");
} else if (z % 10 == 1){
   alert("This year is in the" + " " + z + "st Century");
} else if (z % 10 == 2){
    alert("This year is in the" + " " + z + "nd Century");
} else if (z % 10 == 3){
    alert("This year is in the" + " " + z + "rd Century");
  } else {
    alert("This year is in the" + " " + z + "th Century");
  }
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
  var x = 0;
  while (x <= 99){
    x = x + 1;
    if(x % 4 == 0 && x % 10 == 0){
      console.log("FourTen");
    }else if(x % 10 == 0){
      console.log("Ten");
    }else if(x % 4 == 0){
      console.log("Four");
    }else{
      console.log(x);
    }
  }
}


function calc(){
  var a = parseInt(document.querySelector("#value1").value);
  var b = parseInt(document.querySelector("#value2").value);
  var op = document.querySelector("#operator").value;
  var calculate; 

  if (op == "add"){
    calculate = a + b;
  } else if (op == "min") {
    calculate = a - b;
    } else if (op == "div") {
    calculate = a / b;
    } else if (op == "mul") {
    calculate = a * b;

  }

document.querySelector("#result").innerHTML = calculate;
}