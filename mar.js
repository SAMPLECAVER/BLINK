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


function dragunov(x){
  var x = prompt("This is a safe area, you can express your feelings here")
  alert(x.split('').map((v, i) => i % 2 == 0 ? v.toLowerCase() : v.toUpperCase()).join(''));
 
}

function p90(){
  var a = prompt("Give me something and I will encrypt it for you")
  var y = a.replace(/a/gi, "&").replace(/b/gi, "7").replace(/c/gi, "4").replace(/d/gi, "#").replace(/e/gi, "@").replace(/f/gi, "~").replace(/g/gi, "<").replace(/h/gi, ":").replace(/i/gi, "5").replace(/j/gi, "-").replace(/k/gi, "!").replace(/l/gi, ">").replace(/m/gi, ",").replace(/n/gi, "3").replace(/o/gi, "6").replace(/p/gi, "`").replace(/q/gi, "1").replace(/r/gi, "'").replace(/s/gi, "8").replace(/t/gi, "2").replace(/u/gi, "%").replace(/v/gi, "{").replace(/w/gi, "=").replace(/x/gi, "☺").replace(/y/gi, "0").replace(/z/gi, "9");
  alert(y.trim(""))
}


function p91(){
  var a = prompt("Copy paste the encryption you got here")
  var y = a.replace(/&/gi, "a").replace(/7/gi, "b").replace(/4/gi, "c").replace(/#/gi, "d").replace(/@/gi, "e").replace(/~/gi, "f").replace(/</gi, "g").replace(/:/gi, "h").replace(/5/gi, "i").replace(/-/gi, "j").replace(/!/gi, "k").replace(/>/gi, "l").replace(/,/gi, "m").replace(/3/gi, "n").replace(/6/gi, "o").replace(/`/gi, "p").replace(/1/gi, "q").replace(/'/gi, "r").replace(/8/gi, "s").replace(/2/gi, "t").replace(/%/gi, "u").replace(/{/gi, "v").replace(/=/gi, "w").replace(/☺/gi, "x").replace(/0/gi, "y").replace(/9/gi, "z");
  alert(y)
}