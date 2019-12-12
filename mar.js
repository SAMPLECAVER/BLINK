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
  var x = prompt("Who is the best coder in the class?")
  var y = (x.toLowerCase())
  if (y == "omar"){
    alert("Yeah that's right it's meeee");
  }else {
     alert("Come on it's not that hard");
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

function m4(){
  var x = prompt("Write anything and I will tell you how long it is")
  var y = (x.trim());
  var z = y.split(" ").join("")
  alert(z.length);
}

function ak74u(){
  var x = prompt("Enter your username");
 var z = x.toLowerCase();
 var o = (z.trim());
  var y = prompt("Now your password");
  if (o == "pais" && y == "isthebest"){
    alert("True");
  } else {
    alert("False");
}
}


function dragunov(){
  var x = prompt("This is a safe area, you can express your feelings here")
  var i = x.toLowerCase();
  for (i=0; i<x.length; i+=2);
}

function p90(){
  var a = prompt("Give me something and I will encrypt it for you")
  var y = a.replace(/a/g, "&").replace(/b/g, "?").replace(/c/g, "♫").replace(/d/g, "*").replace(/e/g, " ").replace(/f/g, "~").replace(/g/g, "g").replace(/h/g, "|").replace(/i/g, "+").replace(/j/g, "-").replace(/k/g, "!").replace(/l/g, ">").replace(/m/g, ",").replace(/n/g, ".").replace(/o/g, "♥").replace(/p/g, "`").replace(/q/g, "5").replace(/r/g, "♠").replace(/s/g, "♣").replace(/t/g, "♦").replace(/u/g, "1").replace(/v/g, "{").replace(/w/g, "♀").replace(/x/g, "☺").replace(/y/g, "0").replace(/z/g, "9")
  alert(y.trim(""))
  }


function p91(){
  var a = prompt("Copy paste the encryption you got here")
  var y = a.replace(/&/g, "a").replace(/?/g, "b").replace(/♫/g, "c").replace(/d/g, "*").replace(/ /g, "e").replace(/~/g, "f").replace(/~/g, "g").replace(/|/g, "h").replace(/+/g, "i").replace(/-/g, "j").replace(/!/g, "k").replace(/>/g, "l").replace(/,/g, "m").replace(/./g, "n").replace(/♥/g, "o").replace(/`/g, "p").replace(/5/g, "q").replace(/♠/g, "r").replace(/♣/g, "s").replace(/♦/g, "t").replace(/1/g, "u").replace(/{/g, "v").replace(/♀/g, "w").replace(/☺/g, "x").replace(/0/g, "y").replace(/9/g, "z")
  alert(y)
}