function coinToss(){
    const toss = Math.floor(Math.random() * 2)
    if (toss === 1) {
        return "heads";
    } else {
        return "tails";
    }
}


const numberOfTosses = Number(prompt("How many tosses?"));
const tossChoice = prompt(`"heads" or "tails"`);

if (tossChoice !== "heads" && tossChoice !== "tails") {
    console.error("you didn't input a valid argument");
}else {
    let victories = 0;
    let losses = 0;
    for(let i=0; i<numberOfTosses; i++) {
        const toss = coinToss();
        if (toss === tossChoice) {
            victories++;
        }else {
            losses++;
        }
        console.log(toss)
    }
    const result = `Victories: ${victories} | Losses: ${losses}\n`;
    if (victories > losses){
        alert("You win")
    } else if (victories < losses){
        alert("You lose")
    } else {
        alert("Tie")
    }
    alert(result);
}



