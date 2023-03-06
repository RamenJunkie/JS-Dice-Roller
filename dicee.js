function setImage(diceImage, roll) {
    console.log(roll);
    if(roll === 1) { rolled = "images/dice1.png"; }
    else if(roll === 2) { rolled = "images/dice2.png"; }
    else if(roll === 3) { rolled = "images/dice3.png"; }
    else if(roll === 4) { rolled = "images/dice4.png"; }
    else if(roll === 5) { rolled = "images/dice5.png"; }
    else { rolled = "images/dice6.png"; }


    diceImage.src = rolled;
}

let player1Roll = Math.floor(Math.random()*6)+1;
let player2Roll = Math.floor(Math.random()*6)+1;

let dice1Image = document.querySelector("img.img1");
let dice2Image = document.querySelector("img.img2");

if( player1Roll > player2Roll) {
    document.getElementById("headtext").textContent = "Player 1 Wins!";
}
else if (player2Roll > player1Roll) {
    document.getElementById("headtext").textContent = "Player 2 Wins!";
}
else {
    document.getElementById("headtext").textContent = "Its a Tie!";
}

setImage(dice1Image,player1Roll);
setImage(dice2Image,player2Roll);


