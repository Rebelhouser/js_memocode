var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

while (isSunk == false) {
	guess = prompt ("Готов! Прицеливайся! Огонь! (введите число в диапазоне 0-6) : ");
	
	if (guess < 0 || guess > 6) {
		alert ("Пожалуйста, введите число из диапазона 0-6!");
				}
	else {
		guesses = guesses + 1;
	
	
	if (guess == location1 || guess == location2 || guess == location3) { 
		alert ("Попал!"); 
		hits = hits + 1;
		
		if (hits == 3) {
		isSunk = true;
		alert ("Вы потопили мой корабль!");
			}
							
			} else {
				alert ("Мимо цели!");
			}
		}
	}
	
var stats = "Вы сделали " + guesses + " выстрелов для потопления моего корабля, " + " что означает такую Вашу стрелковую точность " + (3/guesses);
alert (stats);